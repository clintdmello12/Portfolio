import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Mail, ServerCog, ShieldCheck, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons.jsx";
import { profile } from "../data/profile.js";

const roles = ["Software Engineer", "DevOps Engineer", "Site Reliability Engineer"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentRole = roles[roleIndex];
  const typedRole = useMemo(() => currentRole.slice(0, visibleLetters), [currentRole, visibleLetters]);

  useEffect(() => {
    const isComplete = visibleLetters === currentRole.length;
    const isEmpty = visibleLetters === 0;
    const delay = isComplete && !deleting ? 1150 : deleting ? 42 : 76;

    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && isEmpty) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setVisibleLetters((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentRole, deleting, visibleLetters]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.1 }}
        >
          <h1 className="typing-hero">
            <motion.span
              className="typing-greeting"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
            >
              Hey there, I am Clint
            </motion.span>
            <span className="typing-role-line">
              I am <span className="typing-role">{typedRole}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-lede">{profile.headline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Work
            </a>
            <a className="button ghost" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Email Me
            </a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
            <a href="#about" aria-label="Scroll to about">
              <ArrowDown size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-console"
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="console-orbit" />
          <div className="console-panel">
            <div className="console-header">
              <span />
              <span />
              <span />
            </div>
            <div className="console-line active">
              <Sparkles size={18} />
              <span>AI workflows online</span>
            </div>
            <div className="console-line">
              <ServerCog size={18} />
              <span>Kubernetes and AWS delivery ready</span>
            </div>
            <div className="console-line">
              <ShieldCheck size={18} />
              <span>SRE observability enabled</span>
            </div>
            <div className="console-line">
              <Code2 size={18} />
              <span>Backend systems tuned for scale</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
