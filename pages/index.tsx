import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";

const Home: NextPage = () => {
  return (
<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      {/*<Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center"><img
        className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" src="https://t3.ftcdn.net/jpg/05/75/88/74/360_F_575887429_chcmd3cZOrsgWdH61oTQPyPoE51ZnpIB.jpg" alt="" /></div></footer></Link>*/}
    </div>
  );
};

export default Home;