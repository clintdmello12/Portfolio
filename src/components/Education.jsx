import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/profile.js";
import { LogoMark } from "./LogoMark.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function Education() {
  return (
    <section className="section education-section">
      <SectionHeader eyebrow="EDUCATION & CERTIFICATIONS" title="Academic foundation and certifications." />
      <div className="credential-grid">
        <div className="credential-panel">
          <div className="panel-title">
            <GraduationCap size={28} />
            <h3>Education</h3>
          </div>
          {education.map((item) => (
            <article key={item.school}>
              <LogoMark src={item.logo} alt={`${item.school} logo`} fallback={item.logoText} />
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.duration}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="credential-panel highlight-panel">
          <div className="panel-title">
            <Award size={28} />
            <h3>Certifications</h3>
          </div>
          {certifications.map((item) => (
            <article key={item.name}>
              <LogoMark src={item.logo} alt={`${item.name} logo`} fallback={item.logoText} />
              <div>
                <h3>{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
