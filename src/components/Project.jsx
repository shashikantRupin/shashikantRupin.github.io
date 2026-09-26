import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import getProjects from "../data/projects";
import AOS from "aos";

const projectImages = import.meta.glob("../images/projects/*", { eager: true, import: "default" });

const getProjectImage = (imageName) => {
  if (projectImages[`../images/projects/${imageName}`]) {
    return projectImages[`../images/projects/${imageName}`];
  }
  try {
    return new URL(`../images/projects/${imageName}`, import.meta.url).href;
  } catch {
    return "";
  }
};

export default function Projects() {
  const [projects, setProjects] = useState(getProjects());

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="projects-continer sections"
      id="projects"
    >
      <h1 className="heading">
        <span className="sauce">Projects</span>
      </h1>
      <div className="project-cards-wrapper">
        <div className="project-cards">
          {projects?.map((project, index) => (
            <div data-aos="fade-up" key={project.id} className="project-card">
              <div className="project-img">
                <a
                  href={project.projectLinkHosted || project.projectLinkGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="project-img-link"
                >
                  <img
                    src={getProjectImage(project.image)}
                    alt={project.projectTitle || "project image"}
                  />
                </a>
              </div>
              <div className="project-info">
                <span className="project-overline">Featured Project</span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.projectLinkHosted || project.projectLinkGithub}
                  className="project-title-link"
                >
                  <h3 className="project-title">{project.projectTitle}</h3>
                </a>
                <div className="project-description">
                  <p>{project.projectInfo}</p>
                </div>
                <ul className="tech-used project-tech-stack">
                  {project.techUsed.map((tech, i) => (
                    <li key={i} className="tech-stack-text">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.projectLinkGithub && (
                    <a
                      className="project-github-link"
                      rel="noreferrer"
                      target="_blank"
                      href={project.projectLinkGithub}
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {project.projectLinkHosted && (
                    <a
                      className="project-deployed-link"
                      rel="noreferrer"
                      target="_blank"
                      href={project.projectLinkHosted}
                      title="View Live Demo"
                      aria-label="View Live Demo"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
