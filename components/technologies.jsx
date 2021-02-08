import Image from "next/image";
import technologiesData from "@data/technologies.json";

const Technologies = () => {
  return (
    <section className="text-center section-p">
      <h2>
        <span className="text-primary-500">Libraries / Frameworks</span> I work
        with
      </h2>
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
        {technologiesData.map(({ src, alt }, i) => (
          <div
            key={i}
            className="inline-flex justify-center"
            style={{ maxHeight: "85px" }}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full h-auto w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
