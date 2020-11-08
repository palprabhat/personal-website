const FormData = require("form-data");

export default async function handler(req, res) {
  const url = process.env.CONTACT_API_URL;

  if (req.method === "POST") {
    try {
      const formData = new FormData();
      const data = JSON.parse(req.body);

      Object.entries(data).map(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(url, {
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
