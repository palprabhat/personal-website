import projects from "@data/recentProjects.json";
import { FC } from "react";
import NewProjectCard from "./newProjectCard";

const RecentProjects: FC = () => {
  return (
    <section className="text-center section-p">
      <h2>My Recent Projects</h2>
      <p className="mt-10">
        {"Here are a few design projects I've worked on recently."}
      </p>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around">
        {projects.map(
          (
            {
              src,
              name,
              description,
              tech,
              liveSiteLink,
              githubLink,
              liveSiteLinkAriaLabel,
              githubAriaLabel,
            },
            i
          ) => (
            <NewProjectCard
              key={i}
              src={src}
              name={name}
              description={description}
              tech={tech}
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
