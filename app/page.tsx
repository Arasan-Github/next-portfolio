import Hero from "@/components/sections/hero";
import Projects from "../components/sections/projects"
import Contact from "@/components/sections/contact";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
