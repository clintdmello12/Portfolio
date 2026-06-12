import { motion } from "framer-motion";
import { skills } from "../data/profile.js";
import { LogoMark } from "./LogoMark.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeader
        eyebrow="SKILLS"
        title="A practical stack for AI, cloud, backend, and reliability work."
      />
      <div className="skill-grid">
        {skills.map((group, index) => (
          <motion.article
            className="skill-card"
            key={group.group}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="skill-card-topline">
              <span>0{index + 1}</span>
              <h3>{group.group}</h3>
            </div>
            <div className="skill-meter" aria-hidden="true">
              <i style={{ width: `${88 - index * 7}%` }} />
            </div>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="skill-chip" key={item.name}>
                  <LogoMark src={item.logo} alt={`${item.name} logo`} fallback={item.logoText} />
                  {item.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
