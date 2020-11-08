export default async function handler(req, res) {
  let googleUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    process.env.RECAPTCHA_SITE_SECRET +
    "&response=" +
    req.body.captcha;

  console.log(req.body);

  let captchaResponse = await fetch(googleUrl);

  if (captchaResponse.data.success === false) {
    res.status(500).send({ success: false, message: "captcha failed" });
  } else {
    res.status(200).send({ success: true });
  }
}
