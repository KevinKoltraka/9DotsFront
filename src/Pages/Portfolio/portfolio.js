import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import projects from "./projects"; // Mock data file
import "./portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("All"); // Filtering state

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="portfolio">
      <div className="container">
        <h1 className="section-title">Our Projects</h1>
        <p className="section-description">
          A showcase of the work we’ve done for our valued clients.
        </p>

        <FilterBar currentFilter={filter} setFilter={setFilter} />

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
