import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-56 px-4">
      <h2 className="text-5xl md:text-6xl text-center">
        Full stack web developer
      </h2>
      <p className="text-3xl md:text-5xl text-center">
        I design and build web application, and I love what I do.
      </p>

      <Image
        src="/images/computer.svg"
        alt="Computer image"
        width={400}
        height={400}
      />
    </section>
  );
};

export default Hero;
