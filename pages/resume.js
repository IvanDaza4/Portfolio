import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import data from "../data/portfolio.json";
import ParticlesBackground from "../components/ParticlesBackground";

const Resume = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { name, showResume, showCursor, resume } = data;

  useEffect(() => {
    setMounted(true);
    if (!showResume) {
      router.push("/");
    }
  }, [showResume, router]);

  if (!mounted) return null;

  const renderSkillsSection = (title, skills) => (
    <div className="mt-2 mob:mt-5">
      <h2 className="text-lg font-medium">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="py-1">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button 
            onClick={() => router.push("/edit")} 
            type={"primary"}
            className="text-xs py-1 px-2"
          >
            Edit
          </Button>
        </div>
      )}
      
      {showCursor && <Cursor />}
      <ParticlesBackground />
      <div className="gradient-circle bg-black"></div>
      <div className={`container mx-auto mb-10 ${showCursor ? "cursor-none" : ""}`}>
        <Header isBlog />
        
        <div className="mt-10 w-full flex flex-col items-center">
          <div className={`
            w-full max-w-4xl p-8 mob:p-5 desktop:p-12 rounded-lg shadow-sm
            ${theme === "dark" ? "bg-slate-800" : "bg-gray-50"}
          `}>
            {/* Sección de Información Personal */}
            <div className="border-b pb-6 border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl font-extrabold mt-3 text-primary dark:text-white">
                {resume.tagline}
              </h2>
              <p className="w-full md:w-4/5 text-lg mt-3 opacity-80">
                {resume.description}
              </p>
              
              <div className="mt-4">
                <Socials />
              </div>
            </div>

            {/* Sección de Experiencia */}
            <div className="mt-8 border-b pb-6 border-gray-200 dark:border-gray-700">
              <h1 className="text-2xl font-bold mb-4 mt-10">Experiencia</h1>
              {resume.experiences.map((exp) => (
                <ProjectResume key={exp.id} {...exp} />
              ))}
            </div>

            {/* Sección de Educación */}
            <div className="mt-8 border-b pb-6 border-gray-200 dark:border-gray-700">
              <h1 className="text-2xl font-bold mb-4">Educación</h1>
              <div>
                <h2 className="text-lg font-medium">
                  {resume.education.universityName}
                </h2>
                <p className="text-sm opacity-75">
                  {resume.education.universityDate}
                </p>
                <p className="text-sm mt-2 opacity-80">
                  {resume.education.universityPara}
                </p>
              </div>
            </div>

            {/* Sección de Habilidades */}
            <div className="mt-8">
              <h1 className="text-2xl font-bold mb-4">Habilidades</h1>
              <div className="flex mob:flex-col desktop:flex-row justify-between">
                {resume.languages && renderSkillsSection("Lenguajes", resume.languages)}
                {resume.frameworks && renderSkillsSection("Frameworks", resume.frameworks)}
                {resume.others && renderSkillsSection("Otras herramientas", resume.others)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

              
          