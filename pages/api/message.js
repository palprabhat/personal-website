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

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reqData = JSON.parse(req.body);

    const human = await validateHuman(reqData.reToken);
    console.log(human);
    if (!human) {
      res.status(400);
      res.json({ errors: ["Please, you're not fooling us, bot."] });
      return;
    }

    try {
      const formData = new FormData();

      Object.entries(reqData).map(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(process.env.CONTACT_API_URL, {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();

      if (responseData.result === "success") {
        res.status(200).send({ data: responseData.data });
        return;
      }

      res.status(500).send({ error: "Unable to send message" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Unable to send message" });
    }
  } else {
    res.status(405).send({ error: "Request method not supported" });
  }
}
