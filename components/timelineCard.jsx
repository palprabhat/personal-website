import Image from "next/image";

const TimelineCard = ({ title, subTitle, type }) => {
  return (
    <div className={`flex ${type !== "work" ? "md:flex-row-reverse" : ""}`}>
      <div
        className={`relative work w-4/5 md:w-2/5 mx-auto ${
          type === "work" ? "md:ml-0" : "md:mr-0"
        } bg-primary-200 rounded-xl p-2 text-left mb-4`}
      >
        {type === "education" && (
          <div className="absolute grad-cap">
            <Image src="/images/graduation_cap.png" width="84" height="84" />
          </div>
        )}
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
