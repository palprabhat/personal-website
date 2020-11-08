import Image from "next/image";

const TimelineCard = ({ title, subTitle, descriptions = [], period, type }) => {
  return (
    <div
      className={`timeline-card ml-2 md:ml-0 flex ${
        type !== "work" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`relative work w-4/5 md:w-2/5 mx-auto ${
          type === "work" ? "md:ml-0" : "md:mr-0"
        } bg-primary-200 rounded-xl p-4 text-left mb-4 ${
          type === "education" ? "mt-6" : ""
        }`}
      >
        {type === "education" && (
          <div className="absolute grad-cap">
            <Image src="/images/graduation_cap.svg" width="84" height="86" />
          </div>
        )}
        <div className="text-right text-gray-700 text-sm uppercasep">
          {period}
        </div>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <ul className="pt-4 list-disc pl-4">
          {descriptions.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineCard;
