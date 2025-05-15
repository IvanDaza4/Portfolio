import React from "react";
import yourData from "../../data/portfolio.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Socials = ({ className }) => {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "github":
        return <FaGithub className="mr-2 text-3xl md:text-2xl" />;
      case "linkedin":
        return <FaLinkedin className="mr-2 text-3xl md:text-2xl" />;
      case "email":
        return <FaEnvelope className="mr-2 text-3xl md:text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${className} flex flex-wrap mt-5 gap-4`}>
      {yourData.socials.map((social, index) => (
        <a
          key={index}
          href={social.title.toLowerCase() === "email" 
                ? `mailto:${social.link}` 
                : social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 rounded-lg 
                     text-gray-300 
                    hover:text-violet-400 dark:hover:text-violet-400
                    hover:bg-gray-800 dark:hover:bg-gray-800
                    transition-all duration-300 lg:text-2xl sm:text-lg
                    md:flex-row"
        >
          {/* Mobile: Solo icono grande */}
          <div className="md:hidden block">
            {React.cloneElement(getIcon(social.title), { 
              className: "text-2xl mx-2" 
            })}
          </div>
          
          {/* Desktop: Icono + texto (como antes) */}
          <div className="hidden md:flex items-center">
            {getIcon(social.title)}
            <span className="font-mono text-xl">{social.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;