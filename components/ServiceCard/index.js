import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative group w-full p-2 mob:p-4 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
      <div
        className={`relative z-10 border border-transparent backdrop-blur-sm ${
          mounted && theme === "dark"
            ? "hover:bg-purple-600/10 hover:border-purple-400/50"
            : "hover:bg-purple-600/10"
        } p-6 rounded-2xl transition-all duration-300`}
      >
        <h1 className="text-white text-2xl font-semibold">{name || "Heading"}</h1>
        <p className="mt-4 text-lg text-gray-400  leading-relaxed">
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
        </p>
      </div>
  
      {/* Border glow on hover */}
      <span className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 animate-borderMove pointer-events-none transition-all duration-300"></span>
    </div>
  );
};

export default ServiceCard;
