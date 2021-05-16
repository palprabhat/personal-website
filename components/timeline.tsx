import TimelineCard from "./timelineCard";
import timelineData from "@data/timeline.json";

const Timeline = () => {
  return (
    <section className="text-center section-p">
      <h2>Timeline</h2>
      <div className="timeline max-w-4xl mx-auto mt-20">
        {timelineData.map(
          ({ type, period, title, subTitle, descriptions }, i) => (
            <TimelineCard
              key={i}
              type={type}
              period={period}
              title={title}
              subTitle={subTitle}
              descriptions={descriptions}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Timeline;
