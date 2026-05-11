import React, { useState } from "react";
import { Download } from "lucide-react";

const DownloadCV = () => {
  const [lang, setLang] = useState("es");

  const cvFiles = {
    es: { url: "/pdf/CV_Ivan_Daza_ES.pdf", fileName: "Ivan_Daza_CV_ES.pdf" },
    en: { url: "/pdf/CV_Ivan_Daza_EN.pdf", fileName: "Ivan_Daza_CV_EN.pdf" },
  };

  const handleDownload = () => {
    const { url, fileName } = cvFiles[lang];
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col mt-5 items-start space-y-4">

      {/* Filtro de idioma */}
      <div className="flex items-center gap-1 bg-white/5 border border-purple-500/20 rounded-full p-1 backdrop-blur-sm">
        <button
          onClick={() => setLang("es")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${lang === "es"
            ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/30"
            : "text-gray-400 hover:text-white"
            }`}
        >
          🇦🇷 Español
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${lang === "en"
            ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/30"
            : "text-gray-400 hover:text-white"
            }`}
        >
          🇺🇸 English
        </button>
      </div>

      {/* Botón de descarga */}
      <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-violet-600 rounded-lg opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition duration-300 blur-sm"></div>
        <button
          onClick={handleDownload}
          className="relative w-full px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <span className="text-white text-sm sm:text-base font-medium group-hover:text-pink-100 transition-colors">
            {lang === "es" ? "Descargar currículum" : "Download Resume"}
          </span>
          <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 group-hover:text-violet-300 transition-all" />
        </button>
      </div>

    </div>
  );
};

export default DownloadCV;