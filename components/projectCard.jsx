import Image from "next/image";

const ProjectCard = ({
  src,
  name,
  liveSiteLink,
  liveSiteLinkAriaLabel,
  githubLink,
  githubAriaLabel,
}) => {
  return (
    <div
      tabIndex="1"
      className="relative bg-primary-100 shadow-xs mt-8 px-6 rounded-xl transition duration-200 ease-in group overflow-hidden"
    >
      <div className="flex flex-col py-10 px-8 items-center justify-center absolute inset-0 z-20">
        <h3 className="text-white mb-6 opacity-0 transition duration-200 ease-in group-hover:opacity-100 group-focus:opacity-100">
          {name}
        </h3>
        <div className="flex justify-around w-1/2 opacity-0 transition duration-200 ease-in group-hover:opacity-100 group-focus:opacity-100">
          {liveSiteLink && (
            <a
              href={liveSiteLink}
              target="_blank"
              rel="noreferrer"
              className={`brand-icon-link text-3xl text-white hover:text-primary-400`}
              aria-label={liveSiteLinkAriaLabel}
            />
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={`brand-icon-github text-3xl text-white hover:text-primary-400`}
            aria-label={githubAriaLabel}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black z-10 opacity-0 transition duration-200 ease-in group-hover:opacity-75 group-focus:opacity-75"></div>
      <Image src={src} width="245" height="332" />
    </div>
  );
};

export default ProjectCard;
