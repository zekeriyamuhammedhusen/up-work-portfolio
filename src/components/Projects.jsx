import React from 'react';
import { featuredProjects } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow-text">portfolio</div>
        <h2 className="h-title">Recent projects</h2>
        <p className="section-sub">
          A few examples of applications I've built end to end using the MERN stack.
        </p>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="ptype">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="plinks">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
