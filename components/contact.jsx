import Image from "next/image";
import * as Yup from "yup";
import { Form, InputField, TextArea } from "./reactHookFormUI";

const validationSchema = Yup.object({
  name: Yup.string().required("Please provide your name"),
  email: Yup.string()
    .required("Please provide your email")
    .email("Please provide a valid email"),
  subject: Yup.string().required("Please add a subject"),
  message: Yup.string().required("Please add a message"),
});

const Contact = () => {
  const onSubmit = (data) => console.log(data);

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
        <Form
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          className="md:w-1/2 md:px-8"
        >
          <InputField name="name" placeHolder="Name" />
          <InputField name="email" placeHolder="Email" />
          <InputField name="subject" placeHolder="Subject" />
          <TextArea name="message" placeHolder="Message" />
          <button type="submit" className="btn-secondary">
            Send message
          </button>
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
        </Form>
      </div>
    </section>
  );
};

export default Contact;
