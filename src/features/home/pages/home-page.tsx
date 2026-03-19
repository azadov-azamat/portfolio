import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Marquee from "../components/marquee";
import Navigation from "../components/navigation";
import Projects from "../components/projects";
import ThreeBackground from "../components/three-background";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function HomePage() {
  return (
    <div style={{ background: "var(--ink)" }}>
      <ThreeBackground />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
