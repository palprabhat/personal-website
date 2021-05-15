const FormData = require("form-data");

const validateHuman = async (token) => {
  const secret = process.env.RECAPTCHA_SITE_SECRET;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
};

const sendMessage = async (req) => {
  try {
    const formData = new FormData();

    Object.entries(req).map(([key, value]) => {
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

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reqData = JSON.parse(req.body);

    const human = await validateHuman(reqData.reToken);
    if (!human) {
      res.status(400).send({ error: "Could not verify you as human" });
      return;
    }

    const resData = await sendMessage(reqData);

    if (resData) {
      res.status(200).send({ data: resData });
    } else {
      res.status(500).send({ error: "Unable to send message" });
    }
  } else {
    res.status(405).send({ error: "Request method not supported" });
  }
}
