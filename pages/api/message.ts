/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";

type RequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
  reToken: string;
};

type SendMessage = (reqBody: RequestBody) => Promise<string | null>;
type ValidateHuman = (token: string) => Promise<boolean>;

const cleanFromData = (formData: URLSearchParams) => {
  formData.forEach((_value, key) => formData.delete(key));
  formData.delete("_valueLength");
  formData.delete("writable");
  formData.delete("dataSize");
  formData.delete("pauseStreams");
  formData.delete("_streams");
  formData.delete("_insideLoop");
};

const validateHuman: ValidateHuman = async (token) => {
  const secret = process.env.RECAPTCHA_SITE_SECRET;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success as boolean;
};

const sendMessage: SendMessage = async (reqBody): Promise<any> => {
  try {
    const formData = new URLSearchParams(new FormData() as any);

    cleanFromData(formData);

    Object.entries(reqBody).map(([key, value]) => {
      if (key !== "reToken") formData.append(key, value);
    });

    const response = await fetch(process.env.CONTACT_API_URL, {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.result === "success") {
      return responseData.data;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    const reqBody = JSON.parse(req.body) as RequestBody;

    const human = await validateHuman(reqBody.reToken);
    if (!human) {
      res.status(400).send({ error: "Could not verify you as human" });
      return;
    }

    const resData = await sendMessage(reqBody);

    if (resData) {
      res.status(200).send({ data: resData });
    } else {
      res.status(500).send({ error: "Unable to send message" });
    }
  } else {
    res.status(405).send({ error: "Request method not supported" });
  }
}
