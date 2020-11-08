import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import { Form, InputField, TextArea, ReCaptcha } from "./reactHookFormUI";
import ErrorText from "./errorText";

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
  captchaToken: Yup.string().required("Please verify you are not a bot"),
});

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [stage, setStage] = useState(STAGE.INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("api/reCaptcha", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.error) {
        setErrorMessage("Something went wrong! Please try again.");
        return;
      }

      setStage(STAGE.COMPELTE);
    } catch (err) {
      setErrorMessage(
        JSON.stringify("Something went wrong! Please try again.")
      );
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
          className="md:w-1/2 md:px-8 flex flex-col justify-end"
          style={{ height: "450px" }}
        >
          {stage === STAGE.INITIAL ? (
            <Form oonSubmit={onSubmit} validationSchema={validationSchema}>
              <InputField name="name" placeHolder="Name" ariaLabel="Name" />
              <InputField name="email" placeHolder="Email" ariaLabel="Email" />
              <InputField
                name="subject"
                placeHolder="Subject"
                ariaLabel="Subject"
              />
              <TextArea
                name="message"
                placeHolder="Message"
                ariaLabel="Message"
              />
              <ReCaptcha name="captchaToken" />
              <button
                type="submit"
                className="btn-secondary"
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
              href="mailto:prahatpal.14@gmail.com"
              className="flex justify-center items-center px-2 group"
            >
              <span className="brand-icon-email mr-1 group-hover:text-primary-600 group-focus:text-primary-600" />
              prahatpal.14@gmail.com
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
