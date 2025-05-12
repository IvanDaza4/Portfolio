import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative group w-full p-2 mob:p-4 rounded-lg overflow-hidden transition-all ease-out duration-300 hover:scale-105">
      <div
        className={`relative z-10 ${
          mounted && theme === "dark" ? "hover:bg-purple-600/20 hover:border-purple-400 hover:border" : "hover:bg-purple-600/20"
        } p-4 rounded-lg transition-colors duration-300`}
      >
        <h1 className="text-3xl">{name || "Heading"}</h1>
        <p className="mt-5 opacity-40 text-xl">
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
        </p>
      </div>
      <span className="absolute inset-0 border-2 hover:border-purple-400 hover:border border-purple-400 opacity-0 group-hover:opacity-100  animate-borderMove rounded-lg pointer-events-none"></span>
    </div>
  );
};

export default ServiceCard;
