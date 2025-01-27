import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import "./portfolio.css";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="project-card" onClick={handleOpen}>
        <img src={project.imageUrl} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
      {showModal && <ProjectModal project={project} handleClose={handleClose} />}
    </>
  );
};

export default ProjectCard;
