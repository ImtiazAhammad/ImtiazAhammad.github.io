"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import About from "@/components/About";
import ProjectsStack from "@/components/ProjectsStack";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />

      <main>
        <Hero />

        <SectionSeparator />

        <About /> {/* What I Do */}

        <SectionSeparator />

        <ProjectsStack /> {/* Selected Work */}

        <SectionSeparator />

        <AboutMe /> {/* About Me */}

        <SectionSeparator />

        <Experience />

        <SectionSeparator />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
