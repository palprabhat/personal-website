import { motion } from "framer-motion";
import { useState } from "react";

const noAnimation = {
  hidden: {
    translateY: 0,
    transition: {
      duration: 0.25,
    },
  },
  visible: {
    translateY: 260,
    transition: {
      duration: 0.25,
    },
  },
};

const smoothInTech = {
  hidden: {
    opacity: 0,
    height: 0,
    translateY: 20,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
      delay: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const smoothIn = {
  hidden: {
    opacity: 0,
    height: 0,
    translateY: 60,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
      delay: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const slideUp = {
  hidden: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  visible: {
    translateY: -260,
    opacity: 0.98,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const NewProjectCard = ({
  src,
  name,
  description,
  tech,
  liveSiteLink,
  liveSiteLinkAriaLabel,
  githubLink,
  githubAriaLabel,
}) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="relative border border-gray-200 shadow-xs mt-8 rounded-xl transition duration-200 ease-in overflow-hidden max-w-xs"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} width="100%" className="object-cover object-top h-64" />
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        className="bg-white border-t border-gray-300 pt-4 h-full"
      >
        <h3
          className={`px-3 transition-colors duration-200 ${
            isHovered ? "text-primary-500" : "text-black"
          }`}
        >
          {name}
        </h3>
        <motion.div variants={smoothInTech}>
          <div className="px-3 overflow-y-scroll" style={{ height: "250px" }}>
            <div className="text-left font-bold text-gray-800">{tech}</div>
            <div className="pt-4 text-lg text-justify">{description}</div>
          </div>
        </motion.div>

        <motion.div
          variants={noAnimation}
          className="flex justify-around items-center py-4"
        >
          {liveSiteLink && (
            <a
              href={liveSiteLink}
              target="_blank"
              rel="noreferrer"
              className={`brand-icon-link text-3xl hover:text-primary-500 focus:text-primary-500 transition-colors duration-150`}
              aria-label={liveSiteLinkAriaLabel}
            />
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={`brand-icon-github text-3xl hover:text-primary-500 focus:text-primary-500 transition-colors duration-150`}
            aria-label={githubAriaLabel}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewProjectCard;
