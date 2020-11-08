import Image from "next/image";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { Form, InputField, TextArea } from "./reactHookFormUI";
import ErrorText from "./errorText";
import ReCaptcha from "react-google-recaptcha";

const STAGE = {
  INITIAL: "initial",
  COMPELTE: "complete",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please provide your name"),
  email: Yup.string()
    .required("Please provide your email")
    .email("Please provide a valid email"),
  subject: Yup.string().required("Please add a subject"),
  message: Yup.string().required("Please add a message"),
});

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [stage, setStage] = useState(STAGE.INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reCaptchaRef = useRef();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const reToken = await reCaptchaRef.current.executeAsync();
    reCaptchaRef.current.reset();

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

      setStage(STAGE.COMPELTE);
    } catch (err) {
      setErrorMessage("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-center section-p bg-primary-100">
      <h2>Have a question or want to work together?</h2>
      <div className="max-w-6xl mx-auto mt-16 flex justify-between items-center">
        <div className="w-1/2 hidden md:block">
          <Image
            src="/images/contact.svg"
            width="936"
            height="491"
            alt="Contact"
          />
        </div>
        <div
          className="w-full md:w-1/2 md:px-8 flex flex-col justify-end"
          style={{ height: "450px" }}
        >
          {stage === STAGE.INITIAL ? (
            <Form onSubmit={onSubmit} validationSchema={validationSchema}>
              <InputField name="name" placeholder="Name" ariaLabel="Name" />
              <InputField name="email" placeholder="Email" ariaLabel="Email" />
              <InputField
                name="subject"
                placeholder="Subject"
                ariaLabel="Subject"
              />
              <TextArea
                name="message"
                placeholder="Message"
                ariaLabel="Message"
              />
              <ReCaptcha
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={reCaptchaRef}
              />
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                Send message
              </button>

              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </Form>
          ) : (
            <div>
              <h3 className="mb-24">
                Thank you for reaching out to me, I will get back to you soon.
              </h3>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setStage(STAGE.INITIAL)}
              >
                Send another message
              </button>
            </div>
          )}

          <div className="flex flex-wrap justify-around mt-8">
            <a
              href="mailto:prabhatpal.14@gmail.com"
              className="flex justify-center items-center px-2 group"
            >
              <span className="brand-icon-email mr-1 group-hover:text-primary-600 group-focus:text-primary-600" />
              prabhatpal.14@gmail.com
            </a>
            <a
              href="tel:+1 (214) 704 - 6768"
              className="flex justify-center items-center px-2 group"
            >
              <span className="brand-icon-mobile mr-1 group-hover:text-primary-600 group-focus:text-primary-600" />
              +1 (214) 704 - 6768
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
