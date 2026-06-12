import { experience } from "../data/profile.js";
import { LogoMark } from "./LogoMark.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeader eyebrow="EXPERIENCE" title="Where I have built and supported production systems." />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <span className="timeline-icon">
              <LogoMark src={item.logo} alt={`${item.company} logo`} fallback={item.logoText} />
            </span>
            <div>
              <h3>{item.company}</h3>
              <p>{item.duration}</p>
              <strong>{item.role}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
