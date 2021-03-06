import Link from "next/link";
import FeelingProud from "./animation/feelingProud";
import BrandLink from "./brandLink";
import {
  downloadLink,
  feelingProudSvg,
  githubIcon,
  heroHeading,
  heroPara,
  introDescription,
  introHeading,
  linkedInIcon,
  twitterIcon,
} from "../constants/testIds.const";

const Hero = () => {
  return (
    <section>
      <div className="text-center pt-11 md:pt-32">
        <div className="px-3 md:px-11 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="pt-8 md:pt-0 md:text-left md:w-3/5">
            <h2 data-testid={heroHeading}>Full-stack web developer</h2>
            <p data-testid={heroPara}>
              I design and build web applications, and I love what I do.
            </p>
            <div className="flex flex-col lg:flex-row mt-8 md:mt-4 lg:mt-8 mb-10">
              <div>
                <BrandLink
                  link="https://www.linkedin.com/in/prabhatpal14/"
                  iconClass="brand-icon-linkedin"
                  ariaLabel="LinkedIn profile"
                  testId={linkedInIcon}
                />
                <BrandLink
                  link="https://github.com/palprabhat"
                  iconClass="brand-icon-github ml-12"
                  ariaLabel="Github profile"
                  testId={githubIcon}
                />
                <BrandLink
                  link="https://twitter.com/prabhatpal14"
                  iconClass="brand-icon-twitter ml-12"
                  ariaLabel="Twitter profile"
                  testId={twitterIcon}
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-12">
                <Link href="/docs/Resume - Prabhat Pal.pdf">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    data-testid={downloadLink}
                  >
                    Download Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-4/5 md:w-2/5">
            <FeelingProud testId={feelingProudSvg} />
          </div>
        </div>
        <div className="bg-primary-100 mt-8 md:mt-0 margin-top-neg section-p">
          <h2 data-testid={introHeading}>
            Hi, I’m <span className="text-primary-500">Prabhat</span>. Nice to
            meet you.
          </h2>
          <p className="max-w-4xl mx-auto mt-8" data-testid={introDescription}>
            {`I'm a Full-stack web developer experienced with all stages of the development cycle for stand-alone applications as well as web applications. I love to bring life to the design, work on solving problems.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
