import ProjectCard from "./projectCard";
import projects from "@data/recentProjects.json";

const RecentProjects = () => {
  return (
    <section className="text-center section-p">
      <h2>My Recent Projects</h2>
      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap justify-around">
        {projects.map(
          (
            {
              src,
              name,
              liveSiteLink,
              githubLink,
              liveSiteLinkAriaLabel,
              githubAriaLabel,
            },
            i
          ) => (
            <ProjectCard
              key={i}
              src={src}
              name={name}
              liveSiteLink={liveSiteLink}
              githubLink={githubLink}
              liveSiteLinkAriaLabel={liveSiteLinkAriaLabel}
              githubAriaLabel={githubAriaLabel}
            />
          )
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
