import React from "react";
import "./portfolio.css";

const ProjectModal = ({ project, handleClose }) => {
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.details}</p>
        <h4>Technologies Used:</h4>
        <ul className="tech-stack">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
