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
      className="overflow-hidden rounded-lg p-2 laptop:p-4 cursor-pointer group transition-all duration-300 dark:hover:bg-gray-800/50"
      onClick={onClick}
    >
      {/* Contenedor de imagen con overlay */}
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-[400px] shadow-md group-hover:shadow-lg">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Overlay con información - Todo alineado a la izquierda */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-4 text-left">
            {/* Área del proyecto (alineado izquierda) */}
            <div className="flex items-center gap-2 text-sm font-medium text-purple-400">
              {getAreaIcon()}
              <span className="capitalize">{area || "Project Area"}</span>
            </div>
            
            {/* Título del proyecto */}
            <h3 className="text-xl font-bold text-white">{name || "Project Name"}</h3>
            
            {/* Descripción (alineado izquierda) */}
            <p className="text-white/60 text-sm font-light line-clamp-3">
              {description || "Project description"}
            </p>
            
            {/* Duración (alineado izquierda) */}
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4" />
              <span>{duration || "Duration"}</span>
            </div>
            
            {/* Tecnologías (alineado izquierda) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-purple-700/80 text-white px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Información siempre visible (fuera del hover) */}
      <div className="mt-4">
        <h1 className="text-xl font-bold dark:text-white transition-colors duration-300 group-hover:text-purple-400 dark:group-hover:text-blue-400">
          {name || "Project Name"}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{area || "Project Area"}</p>
      </div>
    </div>
  );
};

export default WorkCard;