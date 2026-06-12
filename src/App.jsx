import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { InteractiveBackground } from "./components/InteractiveBackground.jsx";
import { Loader } from "./components/Loader.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";

export default function App() {
  return (
    <>
      <Loader />
      <InteractiveBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
