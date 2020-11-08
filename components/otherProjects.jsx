import ProjectCard from "./projectCard";

const OtherProjects = () => {
  return (
    <section className="text-center section-p">
      <h2>My Projects</h2>
      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap justify-around">
        <ProjectCard
          src="/images/project_mini-game_bouncy-ball.png"
          name="Bouncy Ball"
          liveSiteLink="https://mini-games.prabhatpal.com/BouncyBall/"
          githubLink="https://github.com/palprabhat/mini-games/tree/master/BouncyBall"
          liveSiteLinkAriaLabel="Play bouncy ball mini game"
          githubAriaLabel="Bouncy ball mini game github link"
        />
        <ProjectCard
          src="/images/project_machine-learning_mnistnumbers.png"
          name="MNIST Numbers"
          liveSiteLink="https://machine-learning.prabhatpal.com/MnistNumbers/"
          githubLink="https://github.com/palprabhat/MachineLearningProjects/tree/master/MnistNumbers"
          liveSiteLinkAriaLabel="Check live MNIST Numbers project here"
          githubAriaLabel="MNIST Numbers project github link"
        />
        <ProjectCard
          src="/images/project_machine-learning_bouncy-ball.png"
          name="Bouncy Ball using Genetic Algorithm"
          liveSiteLink="https://machine-learning.prabhatpal.com/BouncyBall/"
          githubLink="https://github.com/palprabhat/MachineLearningProjects/tree/master/BouncyBall"
          liveSiteLinkAriaLabel="Check learning algorithm for bouncy ball here"
          githubAriaLabel="Learning algorithm for bouncy ball github link"
        />
      </div>
    </section>
  );
};

export default OtherProjects;
