import Image from "next/image";
import { useState } from "react";
import MyEmail from "./myEmail";
import ContactForm from "./contactForm";

const STAGE = {
  INITIAL: "initial",
  COMPLETE: "complete",
};

const Contact = () => {
  const [stage, setStage] = useState(STAGE.INITIAL);

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
            <ContactForm submitted={() => setStage(STAGE.COMPLETE)} />
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
            <MyEmail />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
