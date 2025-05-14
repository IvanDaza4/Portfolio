import React from "react";
import { Clock, Code2, LayoutTemplate, PenTool } from 'lucide-react';

const WorkCard = ({ img, name, description, title, area, duration, onClick }) => {
  // Icono según el área de trabajo
  const getAreaIcon = () => {
    switch(area?.toLowerCase()) {
      case 'design':
      case 'diseño':
        return <LayoutTemplate className="h-4 w-4 text-purple-400" />;
      case 'development':
      case 'desarrollo':
        return <Code2 className="h-4 w-4 text-purple-400" />;
      case 'ui/ux':
        return <PenTool className="h-4 w-4 text-purple-400" />;
      default:
        return <LayoutTemplate className="h-4 w-4 text-purple-400" />;
    }
  };

  // Tecnologías (añadidas manualmente)
  const technologies = ['React', 'Tailwind CSS', 'Node.js', 'Figma'];

  return (
    <div
      className="overflow-hidden rounded-2xl p-2 laptop:p-4 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30"
      onClick={onClick}
    >
      {/* Imagen con overlay */}
      <div className="relative rounded-xl overflow-hidden transition-all duration-300 h-[400px] shadow-lg group-hover:shadow-xl">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
  
        {/* Overlay en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 md:p-6 flex flex-col justify-end rounded-xl">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-3 text-left">
  
            {/* Área */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-purple-400">
              {getAreaIcon()}
              <span className="capitalize">{area || "Project Area"}</span>
            </div>
  
            {/* Título */}
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
              {name || "Project Name"}
            </h3>
  
            {/* Descripción */}
            <p className="text-sm text-gray-300 hidden md:block">
              {description || "Project description"}
            </p>
            <p className="text-sm text-gray-300 md:hidden line-clamp-3">
              {description || "Project description"}
            </p>
  
            {/* Duración */}
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Clock className="w-4 h-4" />
              <span>{duration || "Duration"}</span>
            </div>
  
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 pt-1">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-2 py-1 rounded-full bg-purple-800/50 text-white backdrop-blur-sm transition-all"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-purple-800/30 text-white/70">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
  
      {/* Información persistente */}
      <div className="mt-4">
        <h1 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {name || "Project Name"}
        </h1>
        <p className="text-sm  text-gray-400">
          {area || "Project Area"}
        </p>
      </div>
    </div>
  );
  
};

export default WorkCard;