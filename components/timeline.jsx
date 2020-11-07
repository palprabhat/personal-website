import Image from "next/image";
import TimelineCard from "./timelineCard";

const Timeline = () => {
  return (
    <section className="text-center section-p">
      <h2>Timeline</h2>
      <div className="relative timeline max-w-4xl mx-auto mt-10">
        <TimelineCard
          title="Zen3 Infosolution America Inc."
          subTitle="Build Engineer"
          type="work"
        />
        <TimelineCard
          title="Tantrum Street LLC"
          subTitle="Software Engineer"
          type="work"
        />
        <TimelineCard
          title="Southern Methodist University"
          subTitle="Master's in Computer Science"
          type="education"
        />
        <TimelineCard
          title="Siemens Healthineers"
          subTitle="Senior Systems Engineer"
          type="work"
        />
        <TimelineCard
          title="Capgemini"
          subTitle="Senior Software Engineer"
          type="work"
        />
      </div>
    </section>
  );
};

export default Timeline;
