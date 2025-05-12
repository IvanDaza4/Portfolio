import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const handleClick = (social) => {
    if (social.title.toLowerCase() === "email") {
      window.location.href = `mailto:${social.link}`;
    } else {
      window.open(social.link, "_blank");
    }
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => handleClick(social)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;