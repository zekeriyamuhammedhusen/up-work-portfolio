import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import '../styles/ProjectShowcase.css';

function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project-showcase-section" id="projects">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2>Featured Projects</h2>
          <p>Hand-picked MERN applications built with attention to detail</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
              <p className="project-summary">{project.summary}</p>
              <div className="project-stack">
                {project.stack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="tech-tag more">+{project.stack.length - 3}</span>
                )}
              </div>
              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <h2>{selectedProject.title}</h2>
            <p className="modal-type">{selectedProject.type}</p>
            <p className="modal-summary">{selectedProject.summary}</p>

            <div className="modal-stack">
              <h4>Tech Stack</h4>
              <div className="stack-list">
                {selectedProject.stack.map((tech, i) => (
                  <span key={i} className="stack-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-cta">
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link primary"
              >
                <FaExternalLinkAlt /> View Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link secondary"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectShowcase;
