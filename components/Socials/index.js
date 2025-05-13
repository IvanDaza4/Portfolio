import React from "react";
import yourData from "../../data/portfolio.json";
import { FaGithub, FaLinkedin, FaEnvelope,FaDownload } from "react-icons/fa";

const Socials = ({ className }) => {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "github":
        return <FaGithub className="mr-2" />;
      case "linkedin":
        return <FaLinkedin className="mr-2" />;
      case "email":
        return <FaEnvelope className="mr-2" />;
      
      default:
        return null;
    }
  };

  return (
    <div className={`${className} flex flex-wrap gap-4`}>
      {yourData.socials.map((social, index) => (
        <a
          key={index}
          href={social.title.toLowerCase() === "email" 
                ? `mailto:${social.link}` 
                : social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 rounded-lg 
                    text-gray-700 dark:text-gray-300 
                    hover:text-violet-600 dark:hover:text-violet-400
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-all duration-300 text-2xl"
        >
          {getIcon(social.title)}
          <span className="font-mono text-xl ">{social.title}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;