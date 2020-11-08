import Image from "next/image";
import technologiesData from "@data/technologies.json";

const Technologies = () => {
  return (
    <section className="text-center section-p">
      <h2>Technologies I work with</h2>
      <div className="max-w-4xl mx-auto mt-8">
        {technologiesData.map(({ src, alt, width, height }, i) => (
          <div
            key={i}
            className="inline-flex justify-center my-6 w-full sm:w-1/2 md:w-1/3"
          >
            <Image src={src} alt={alt} width={width} height={height} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
