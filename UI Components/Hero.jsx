import Projects from "./Hero-Components/Projects";
import Experience from "./Hero-Components/Experience";
import AboutMe from "./Hero-Components/About-Me";
import Pricing from "./Hero-Components/Pricing";
export default function Hero() {
  return (
    <main>
      <AboutMe />
      <Projects />
      <Experience />

      <Pricing />
    </main>
  );
}
