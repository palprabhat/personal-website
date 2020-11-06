const Hero = () => {
  return (
    <section className="text-center pt-11 md:pt-32">
      <div className="px-3 md:px-11 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="pt-8 md:pt-0 md:text-left">
          <h2>Full stack web developer</h2>
          <p>I design and build web application, and I love what I do.</p>
          <div className="mt-8 pb-4">
            <span className="brand-icon-linkedin text-3xl text-primary-500" />
            <span className="brand-icon-github ml-12 text-3xl text-primary-500" />
            <span className="brand-icon-twitter ml-12 text-3xl text-primary-500" />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/feeling_proud.svg"
            alt="Computer desk"
            className="hero-img"
          />
        </div>
      </div>
      <div className="bg-primary-100 mt-8 md:mt-0 margin-top-neg py-12 px-4 md:px-12">
        <h2>
          Hi, I’m <span className="text-primary-500">Prabhat</span>. Nice to
          meet you.
        </h2>
        <p className="max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nunc enim, faucibus quis dui sed, efficitur imperdiet mauris. Mauris a
          tempus odio. Integer vel orci ac ipsum ornare consectetur. Nunc
          malesuada sem sit amet quam ullamcorper, nec fermentum enim gravida.
          Mauris dui purus, consectetur at sapien quis, iaculis tincidunt ante.
          Aliquam erat volutpat. Duis luctus lectus non sapien rhoncus egestas.
        </p>
      </div>
    </section>
  );
};

export default Hero;
