import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Globe, Palette, Layers, Code } from "lucide-react"

const ServiceCard = ({ name, description, icon }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getRandomPosition = () => {
    return {
      top: `${Math.floor(Math.random() * 70)}%`,
      left: `${Math.floor(Math.random() * 70)}%`,
    };
  };

  const circlePosition = getRandomPosition();

  return (
    <div
      className="relative group w-full rounded-2xl overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "linear-gradient(145deg, #13111C, #0A090F)",
        boxShadow: isHovered
          ? "0 10px 30px -10px rgba(139, 92, 246, 0.3)"
          : "none",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {/* Círculo de iluminación */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl transition-all duration-700 ease-in-out"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
          top: circlePosition.top,
          left: circlePosition.left,
          transform: isHovered ? "scale(1.2)" : "scale(1)",
        }}
      ></div>

      {/* Esquina decorativa */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <div
          className="w-full h-full border-t border-r border-purple-400/30"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 70%)",
          }}
        ></div>
      </div>

      {/* Contenido de la tarjeta */}
      <div
        className={`relative z-10 p-6 md:p-8 border rounded-2xl transition-all duration-300 ${
          mounted && theme === "dark"
            ? "border-purple-400/50 hover:bg-purple-600/10"
            : "hover:bg-purple-600/10 border-transparent"
        }`}
      >
        {icon && (
          <div
            className={`mb-6 transform transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            {icon}
          </div>
        )}
        <h1 className="text-white text-2xl md:text-3xl font-semibold">
          {name || "Heading"}
        </h1>
        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
        </p>
      </div>

      {/* Border Glow al hacer hover */}
      <span className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 animate-borderMove pointer-events-none transition-all duration-300"></span>
    </div>
  );
};

export default ServiceCard;
