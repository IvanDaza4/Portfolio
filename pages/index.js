import { useRef, useEffect} from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import SkillsCarousel from "../components/SkillsCarousel";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import ParticlesBackground from "../components/ParticlesBackground";
import TypewriterText from "../components/TypeWriterText";
import { motion } from "framer-motion";
import {DownloadIcon} from "lucide-react"
import DownloadCV from "../components/DownloadCV";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef =  useRef()
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const uxTextRef = useRef();
  const headerText = data.headerTaglineOne.split(" "); // Divide el texto en partes
  const firstWord = headerText[0]; // "Hola"
  const restOfText = headerText.slice(1).join(" "); // Resto del texto



  useEffect(() => {
    const uxText = "enfoque en UX/UI ";
    let i = 0;
    const speed = 100;
    
    // Agregar el cursor inicialmente
    if (uxTextRef.current) {
      uxTextRef.current.innerHTML = '<span class="blinking-cursor">|</span>';
    }
  
    function typeWriter() {
      if (i < uxText.length && uxTextRef.current) {
        // Reemplazar el contenido, incluyendo el cursor al final
        uxTextRef.current.innerHTML = 
          uxText.substring(0, i + 1) + 
          '<span class="blinking-cursor">|</span>';
        i++;
        setTimeout(typeWriter, speed);
      } else if (uxTextRef.current) {
        // Cuando termine, mantener el cursor parpadeando
        uxTextRef.current.innerHTML = 
          uxText + 
          '<span class="blinking-cursor">|</span>';
      }
    }
  
    const timer = setTimeout(typeWriter, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>
      <ParticlesBackground />
      <div className="gradient-circle bg-black"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 px-6">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-400 to-white bg-[length:200%] animate-text-pan"
              >
                {data.headerTaglineOne}
              </motion.span>
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-xl tablet:text-3xl laptop:text-2xl laptopl:text-4xl p-1 tablet:p-2 font-light w-full laptop:w-4/5 dark:text-gray-400"
            >
              Desarrollador full-stack con{" "}
              <span 
                ref={uxTextRef} 
                className="text-purple-400 tracking-wide"
              />
            </h1>
            
          </div>
        </div>
        <div className="relative flex flex-col">
          <Socials className="mt-2 flex laptop:mt-5" />
          <DownloadCV 
            cvUrl="/pdf/Daza Ivan Curriculum.pdf" 
            fileName="Daza_Ivan_CV.pdf" 
            buttonText="Descargar currículum" 
            icon={DownloadIcon}/>
        </div>
        
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          
          
          <h1 className="rounded-full text-2xl font-bold mt-20 ">Proyectos.</h1>
{/*--------------------------------------------------------------------------------------------------*/}
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                area = {project.area}
                duration = {project.duration}
                
            
              />
            ))}
          </div>
          {/*--------------------------------------------------------------------------------------------------*/}
        </div>

        <div className="px-4 laptop:px-0">
          {/* Services Section */}
          <div className="mt-20 laptop:mt-30">
            <h1 className="text-2xl font-bold ">Servicios.</h1>
            <div className="mt-5 mb-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        

          {/* Skills Section */}
          

          {/* About Section */}
          <div className="h-0.5 w-full bg-purple-400 lg:mt-20 sm:mt-10 sm:mb-15 lg:mb-30 rounded-full blur-sm" />          
          <div className="lg:mt-40 laptop:mt-10 " ref={aboutRef}>
            <h1 className="text-2xl font-bold mb-10 mt-20 ">Sobre mí</h1>
            <TypewriterText 
              text={data.aboutpara} 
              speed={15} 
              delay={300} // Opcional: retraso antes de empezar a escribir
              onComplete={() => console.log('Texto completado')} // Callback opcional
            />
          </div>
          <div className="mt-10 lg:mb-10">
            <SkillsCarousel />
          </div>

          
          
            
          
          
        <div ref= {contactRef}>
          <Footer />   
        </div>
        

        </div>

        
         
      </div>
      
    </div>
  );
}
