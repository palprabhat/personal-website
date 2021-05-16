import React, {
  FC,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { Form, InputField, TextArea } from "./reactHookFormUI";
import ReCaptcha, { ReCAPTCHA } from "react-google-recaptcha";
import ErrorText from "./errorText";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IContactForm {
  submitted: () => void;
}

interface IMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const validationSchema = Yup.object({
  name: Yup.string().required("Please provide your name"),
  email: Yup.string()
    .required("Please provide your email")
    .email("Please provide a valid email"),
  subject: Yup.string().required("Please add a subject"),
  message: Yup.string().required("Please add a message"),
});

const ContactForm: FC<IContactForm> = ({ submitted }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reCaptchaRef = useRef() as MutableRefObject<ReCaptcha>;

  const { handleSubmit, register, errors, setValue, watch, trigger } =
    useForm<IMessage>({
      resolver: yupResolver(validationSchema),
      mode: "onTouched",
      defaultValues: {},
    });

  const onSubmit = async (data: IMessage) => {
    setIsSubmitting(true);

    let reToken = null;
    /* istanbul ignore next */
    if (process.env.NODE_ENV?.toLowerCase() !== "test") {
      reToken = await reCaptchaRef.current.executeAsync();
      reCaptchaRef.current.reset();
    }

    try {
      const response = await fetch("api/message", {
        method: "POST",
        body: JSON.stringify({ ...data, reToken }),
      });

      const responseData = await response.json();

      if (responseData.error) {
        setErrorMessage(responseData.error);
        return;
      }
      submitted();
    } catch (err) {
      setErrorMessage("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} register={register} errors={errors}>
      <InputField name="name" placeholder="Name" aria-label="Name" />
      <InputField name="email" placeholder="Email" aria-label="Email" />
      <InputField name="subject" placeholder="Subject" aria-label="Subject" />
      <TextArea name="message" placeholder="Message" aria-label="Message" />
      <ReCaptcha
        sitekey={RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={reCaptchaRef}
      />
      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Form>
  );
};

export default ContactForm;
