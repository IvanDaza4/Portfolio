import React from "react";
import { Download } from "lucide-react";



const DownloadCV = ({ cvUrl = "/pdf/Daza Ivan Portfolio.pdf", fileName = "Daza Ivan CV.pdf" }) => {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div className="flex flex-col mt-5 items-start space-y-6">
        <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
          {/* Capa de efecto pulso */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-violet-600 rounded-lg opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition duration-300 blur-sm"></div>
          
          {/* Botón principal */}
          <button 
            onClick={handleDownload}
            className="relative w-full px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <span className="text-white text-sm sm:text-base font-medium group-hover:text-pink-100 transition-colors">
              Descargar currículum
            </span>
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 group-hover:text-violet-300 transition-all" />
          </button>
        </div>
      </div>
    );
  };
  
  export default DownloadCV;