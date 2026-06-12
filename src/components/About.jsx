import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/profile.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeader
        eyebrow="ABOUT"
        title="Engineer for the build, the launch, and the 3 AM incident."
        copy={profile.summary}
      />
      <div className="about-grid">
        <motion.div
          className="profile-card"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <img src={`${import.meta.env.BASE_URL}assets/clint-outdoor.webp`} alt="Clint Michael Dmello outdoors" />
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="about-panel"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <Sparkles className="panel-icon" size={30} />
          <p>
            My work spans Java/Spring Boot microservices, Node.js integrations, AWS serverless systems,
            Kubernetes delivery, and reliability automation. I like roles where engineering quality,
            operational clarity, and stakeholder communication all matter.
          </p>
          <p>
            I am open to Software Engineer, DevOps/SRE, Solutions Engineer, and Technical Program
            Manager conversations where production systems and business outcomes meet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
