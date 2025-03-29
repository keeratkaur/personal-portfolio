import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceComponent from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Personal Portfolio</title>
      </Head>

      {/* <Header /> */}
      <Header socials={socials} />

      {/* <Hero /> */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* <About /> */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* <Experience /> */}
      <section id="experience" className="snap-center">
        <ExperienceComponent experiences={experiences} />
      </section>

      {/* <Education /> */}

      {/* <Skills /> */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      

      {/* <Projects /> */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* <Contact /> */}
      <section id="contact" className="snap-start">
        <ContactMe />
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


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10, // Revalidate every 10 seconds. in the meantime the next js will show the cached data
  };
};

