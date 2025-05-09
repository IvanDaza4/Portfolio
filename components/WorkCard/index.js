import React from "react";
import {Clock} from 'lucide-react'

const WorkCard = ({ img, name, description, title, area, duration, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 cursor-pointer group"
      onClick={onClick}
    >
      {/* Imagen con overlay */}
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-[400px] ">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
        />

        {/* Overlay con info expandida */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 ease-in-out flex items-center justify-center">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 ease-in-out flex items-center justify-center">
        <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
          <h3 className="text-xl font-bold mb-2">{name}</h3>

          <div className="flex items-center gap-2 mb-3 text-sm">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>

          <p className="text-sm">{description}</p>
        </div>
      </div>
        </div>
      </div>

      {/* Nombre y descripción siempre visibles */}
      <h1 className="mt-5 text-2xl font-semibold">{name || "Project Name"}</h1>
      <h2 className="text-base text-gray-600">{area || "Area of work"}</h2>
    </div>
  );
};

export default WorkCard;
