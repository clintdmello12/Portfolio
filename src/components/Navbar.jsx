import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile.js";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Clint Michael Dmello home">
        <span className="brand-logo">
          <img src="/assets/clint-logo-blue.png" alt="" />
        </span>
        <span>{profile.name}</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href={profile.resume} target="_blank" rel="noreferrer">
        Resume
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
        <a href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          Resume
        </a>
      </div>
    </header>
  );
}
