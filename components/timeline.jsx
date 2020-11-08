import TimelineCard from "./timelineCard";

const Timeline = () => {
  return (
    <section className="text-center section-p">
      <h2>Timeline</h2>
      <div className="timeline max-w-4xl mx-auto mt-20">
        <TimelineCard
          type="work"
          period="Dec 2019 - Present"
          title="Zen3 Infosolution America Inc."
          subTitle="Build Engineer"
          descriptions={[
            "Implemented scripts to automate various stages in the deployment process. Monitored and maintained the deployment process.",
            "Implemented front-end reusable components for the product 'Assignments' (– a complete classroom management tool by Microsoft).",
            "Worked on fixing bugs, writing efficient accessibility code and testing the application.",
          ]}
        />
        <TimelineCard
          type="work"
          period="Aug 2018 - Dec 2019"
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
          period="Aug 2017 - May 2019"
          title="Southern Methodist University"
          subTitle="Master's in Computer Science"
        />
        <TimelineCard
          type="work"
          period="Sep 2016 - Jul 2017"
          title="Siemens Healthineers"
          subTitle="Senior Systems Engineer"
          descriptions={[
            "Implemented modules for a library which was being used by multiple projects process images scanned from a CT scanner machine.",
            "Implemented automated test modules for multiple functionalities.",
          ]}
        />
        <TimelineCard
          type="work"
          period="Jun 2014 - Sep 2016"
          title="Capgemini"
          subTitle="Senior Software Engineer"
          descriptions={[
            "Build a web tool to compare databases and migrate data from one another, which helped the team to sync data with multiple environments.",
            "Received ‘Best Innovative Thinking’ award for building a web tool to automate generation of more than 100 reports, thereby reducing the deliverable turn-around by 15%.",
            "Designed and build a Project Tracing tool to manage different tasks of a project to make the process smooth.",
          ]}
        />
        <TimelineCard
          type="education"
          period="Aug 2009 - May 2013"
          title="Biju Patnaik University of Technology"
          subTitle="Bachelor of Technology in Computer Science & Engineering"
        />
      </div>
    </section>
  );
};

export default Timeline;
