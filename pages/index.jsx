import Hero from "@components/hero";
import OtherProjects from "@components/otherProjects";
import Technologies from "@components/technologies";
import Timeline from "@components/timeline";
import Contact from "@components/contact";
import PageLayout from "@components/pageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <Technologies />
      <Timeline />
      <OtherProjects />
      <Contact />
    </PageLayout>
  );
};

export default Home;
