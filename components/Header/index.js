import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Aquí puedes agregar las acciones correspondientes a cada tab
    if (tabName === "proyectos") handleWorkScroll();
    if (tabName === "sobre-mi") handleAboutScroll();
    if (tabName === "contacto") handleContactScroll();
  };

  return (
    <>
      {/* Versión móvil */}
      <div className="block tablet:hidden">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full p-4">
            <h1
              onClick={() => router.push("/")}
              className="font-medium text-3xl"
            >
              {name}.
            </h1>

            
          </div>

          {/* Menú inferior */}
          <div className="w-full border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-around py-2">
              {/* Si estamos en /resume, mostrar solo Home, Resume y Contacto */}
              {router.pathname === "/resume" ? (
                <>
                  <button
                    onClick={() => router.push("/")}
                    className={`px-4 py-2 relative ${router.pathname === "/" ? "text-pink-400" : ""}`}
                  >
                    Home
                    {router.pathname === "/" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                    )}
                  </button>
                  <button
                    onClick={() => window.open("/resume", "_blank")}
                    className={`px-4 py-2 relative text-pink-400`}
                  >
                    CV
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                  </button>
                  <button
                    onClick={() => window.location.href = "mailto:ivandaza2004@gmail.com"}
                    className={`px-4 py-2 relative ${activeTab === "contacto" ? "text-pink-400" : ""}`}
                  >
                    Contacto
                    {activeTab === "contacto" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                    )}
                  </button>
                </>
              ) : (
                <>
                  {/* Menú normal (todas las opciones) */}
                  <button
                    onClick={() => handleTabClick("proyectos")}
                    className={`px-4 py-2 relative ${activeTab === "proyectos" ? "text-pink-400" : ""}`}
                  >
                    Proyectos
                    {activeTab === "proyectos" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                    )}
                  </button>
                  <button
                    onClick={() => handleTabClick("sobre-mi")}
                    className={`px-4 py-2 relative ${activeTab === "sobre-mi" ? "text-pink-400" : ""}`}
                  >
                    Sobre mí
                    {activeTab === "sobre-mi" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                    )}
                  </button>
                  {showBlog && (
                    <button
                      onClick={() => router.push("/blog")}
                      className={`px-4 py-2 relative ${router.pathname === "/blog" ? "text-pink-400" : ""}`}
                    >
                      Blog
                      {router.pathname === "/blog" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                      )}
                    </button>
                  )}
                  {showResume && (
                    <button
                      onClick={() => window.open("/resume", "_blank")}
                      className={`px-4 py-2 relative ${router.pathname === "/resume" ? "text-pink-400" : ""}`}
                    >
                      Resume
                      {router.pathname === "/resume" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                      )}
                    </button>
                  )}
                  <button
                    onClick={() => handleTabClick("contacto")}
                    className={`px-4 py-2 relative ${activeTab === "contacto" ? "text-pink-400" : ""}`}
                  >
                    Contacto
                    {activeTab === "contacto" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Versión desktop (se mantiene igual) */}
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Proyectos</Button>
            <Button onClick={handleAboutScroll}>Sobre mi</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => window.open("/resume", "_blank")}
                classes="first:ml-1"
              >
                Curriculum
              </Button>
            )}
            <Button onClick={() => window.location.href = "mailto:ivandaza2004@gmail.com"}>
              Contacto
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              
              <button
              onClick={() => router.push("/resume")}
              className={`px-4 py-2 relative  text-pink-400`}
            >
              Curriculum
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"></div>
            </button>
            )}
            <Button onClick={handleContactScroll}>Contacto</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;