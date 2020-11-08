import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import React from "react";

const CaptchaButton = ({ onVerifyCaptcha, register, name }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("contact");

    onVerifyCaptcha(token);
  };

  return (
    <button
      name={name}
      ref={register}
      onClick={clickHandler}
      className="hidden"
    >
      Recaptcha
    </button>
  );
};

const ReCaptcha = ({ onVerifyCaptcha, name, register }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  >
    <CaptchaButton
      onVerifyCaptcha={onVerifyCaptcha}
      name={name}
      ref={register}
    />
  </GoogleReCaptchaProvider>
);
export default ReCaptcha;
