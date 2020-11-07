import Image from "next/image";

const Technologies = () => {
  return (
    <section className="text-center section-p">
      <h2>Technologies I work with</h2>
      <div className="max-w-4xl mx-auto mt-10">
        <div className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/tech_ReactJs.png"
            alt="ReactJs"
            width="164"
            height="85"
          />
        </div>
        <div className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/tech_NextJs.png"
            alt="NextJs"
            width="118"
            height="70"
          />
        </div>
        <div className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/tech_tailwindCss.png"
            alt="tailwindCss"
            width="299"
            height="71"
          />
        </div>
        <div className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/tech_Bootstrap.png"
            alt="Bootstrap"
            width="71"
            height="70"
          />
        </div>
        <div className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/tech_nodeJs.png"
            alt="nodeJs"
            width="114"
            height="70"
          />
        </div>
        <div className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/tech_Reason.png"
            alt="Reason"
            width="188"
            height="70"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
