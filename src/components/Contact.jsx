import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons.jsx";
import { profile } from "../data/profile.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <SectionHeader eyebrow="Let's Connect" title="Ready to build something reliable, intelligent, and useful?" />
      <div className="contact-grid">
        <a href={`mailto:${profile.email}`}>
          <Mail size={22} />
          <span>{profile.email}</span>
        </a>
        <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
          <Phone size={22} />
          <span>{profile.phone}</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon size={22} />
          <span>GitHub</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon size={22} />
          <span>LinkedIn</span>
        </a>
        <span>
          <MapPin size={22} />
          <span>{profile.location}</span>
        </span>
      </div>
    </section>
  );
}
