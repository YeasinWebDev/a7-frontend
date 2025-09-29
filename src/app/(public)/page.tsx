import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";



export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Blogs/>
      <Skills/>
      <Contact/>
    </div>
  );
}
