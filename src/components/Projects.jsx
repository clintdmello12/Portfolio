import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/profile.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeader
        eyebrow="PROJECTS"
      
      />
      <div className="project-grid">
        {projects.map((project) => (
          <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
            <div className="project-topline">
              <span>Repository</span>
              <ArrowUpRight size={20} />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="chip-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
