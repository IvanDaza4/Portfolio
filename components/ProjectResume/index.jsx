import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  // Manejo más robusto de los bullets
  const bulletsArray = typeof bullets === 'string' 
    ? bullets.split(",").filter(b => b.trim() !== '') 
    : Array.isArray(bullets) 
      ? bullets 
      : [];

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between group">
      {/* Sección izquierda - Metadatos */}
      <div className="text-lg w-2/5 mob:w-full mob:mb-2">
        <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
          {position}
        </h3>
        <div className="flex items-center gap-2 text-sm opacity-75">
          <span className="font-medium">{type}</span>
          <span>•</span>
          <span className="italic">{dates}</span>
        </div>
      </div>
      
      {/* Sección derecha - Detalles */}
      <div className="w-3/5 mob:w-full">
        {bulletsArray.length > 0 && (
          <ul className="space-y-2">
            {bulletsArray.map((bullet, index) => (
              <li 
                key={index} 
                className="text-sm opacity-90 flex items-start"
              >
                <span className="text-xs mt-1 mr-2">•</span>
                <span>{bullet.trim()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;