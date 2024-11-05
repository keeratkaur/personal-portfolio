import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Personal Portfolio</title>
        
      </Head>

      {/* <Header /> */}
      <Header />

      {/* <Hero /> */}
      <section id="hero"></section>
      <Hero/>

      {/* <About /> */}

      {/* <Experince /> */}

      {/* <Skills /> */}

      {/* <Projects /> */}

      {/* <Contact /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;