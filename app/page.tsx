'use client'

import Image from "next/image";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  useEffect(() => {
     AOS.init({
          duration: 800,
          once: true,
        })
  }, [])

  return (
    <main className="w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Features/>
      <FAQ/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}
