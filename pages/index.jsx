import Hero from "@components/hero";
import OtherProjects from "@components/otherProjects";
import Technologies from "@components/technologies";
import Timeline from "@components/timeline";
import Contact from "@components/contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Technologies />
      <Timeline />
      <OtherProjects />
      <Contact />
    </>
  );
};

export default Home;
