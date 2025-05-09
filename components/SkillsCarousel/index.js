"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  
  SiMongodb,
  SiFigma,
} from "react-icons/si";

import "swiper/css";

// Definición de habilidades con íconos
const skills = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NoSQL", icon: SiMongodb },
  { name: "Figma", icon: SiFigma },
];

export default function SkillsCarousel() {
  return (
    <div className="py-10 rounded-xl">
      <h2 className="text-2xl">
        Habilidades
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="px-8 mt-10"
      >
        {skills.map(({ name, icon: Icon }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300">
              <Icon className="w-16 h-16 mb-2 mt-10 " />
              <p className="text-sm font-medium">
                {name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
