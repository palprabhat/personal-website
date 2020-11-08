import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import React from "react";

const CaptchaButton = ({ onVerifyCaptcha }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("contact");

    onVerifyCaptcha(token);
  };

  return <button onClick={clickHandler}>Recaptcha</button>;
};

const ReCaptcha = ({ onVerifyCaptcha }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  >
    <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
);
export default ReCaptcha;
