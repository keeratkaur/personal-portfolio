import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Personal Portfolio</title>
        
      </Head>

      {/* <Header /> */}
      <Header />

      {/* <Hero /> */}
      <section id="hero" className="snap-start"></section>
      <Hero/>

      {/* <About /> */}
      <section id="about" className="snap-center">
        < About />
        
      </section>

      {/* <Experince /> */}
      <section id="experience" className="snap-center">
        <Experience/>
      </section>

      {/* <Education /> */}

      {/* <Skills /> */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      

      {/* <Projects /> */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* <Contact /> */}
      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;