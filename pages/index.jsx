import Hero from "@components/hero";
import OtherProjects from "@components/otherProjects";
import Technologies from "@components/technologies";
import Timeline from "@components/timeline";

const Home = () => {
  return (
    <>
      <Hero />
      <Technologies />
      <Timeline />
      <OtherProjects />
    </>
  );
};

export default Home;
