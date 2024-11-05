import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default Home;