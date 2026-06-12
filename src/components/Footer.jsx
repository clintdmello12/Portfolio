import { profile } from "../data/profile.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home">
        <img src={`${import.meta.env.BASE_URL}assets/clint-logo-blue.png`} alt="" />
        <span>{profile.name}</span>
      </a>
      <p>© {new Date().getFullYear()} Built with React, Vite, Tailwind, and Framer Motion.</p>
    </footer>
  );
}
