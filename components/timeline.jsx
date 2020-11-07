import TimelineCard from "./timelineCard";

const Timeline = () => {
  return (
    <section className="text-center section-p">
      <h2>Timeline</h2>
      <div className="relative timeline max-w-4xl mx-auto mt-10">
        <TimelineCard
          type="work"
          title="Zen3 Infosolution America Inc."
          subTitle="Build Engineer"
          descriptions={[
            "Write script to automate various stages in the deployment process. Monitor and maintain the deployment process. - Build front-end reusable components for the product.",
            "Build front-end reusable components for the product 'Assignments' (– a complete classroom management tool by Microsoft). Work on fixing bugs, writing efficient accessibility code and testing the application.",
          ]}
        />
        <TimelineCard
          type="work"
          title="Tantrum Street LLC"
          subTitle="Software Engineer"
          descriptions={[
            "Developed independent and reusable React components using ReasonML for 'Autoboard' (– a merchant onboarding platform for ISOs).",
            "Developed scalable micro-service APIs.",
            "Refactored entire application Autoboard, to create a fast, responsive and highly scalable web application.",
            "Worked on the mobile app for Autoboard using React Native.",
          ]}
        />
        <TimelineCard
          type="education"
          title="Southern Methodist University"
          subTitle="Master's in Computer Science"
        />
        <TimelineCard
          type="work"
          title="Siemens Healthineers"
          subTitle="Senior Systems Engineer"
          descriptions={[
            "Implemented modules for a library which was being used by multiple projects process images scanned from a CT scanner machine.",
            "Implemented automated test modules for multiple functionalities.",
          ]}
        />
        <TimelineCard
          type="work"
          title="Capgemini"
          subTitle="Senior Software Engineer"
          descriptions={[
            "Build a web tool to compare databases and migrate data from one another, which helped the team to sync data with multiple environments.",
            "Received ‘Best Innovative Thinking’ award for building a web tool to automate generation of more than 100 reports, thereby reducing the deliverable turn-around by 15%.",
            "Designed and build a Project Tracing tool to manage different tasks of a project to make the process smooth.",
          ]}
        />
      </div>
    </section>
  );
};

export default Timeline;
