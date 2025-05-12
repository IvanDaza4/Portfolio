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
  SiGithub,
} from "react-icons/si";

import "swiper/css";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NoSQL", icon: SiMongodb },
  { name: "Figma", icon: SiFigma },
  { name: "Github", icon: SiGithub },
];

export default function SkillsCarousel() {
  return (
    <div className="w-full py-12  text-white mb-20 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold  mb-10 ">
          Mis Habilidades
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="px-2 sm:px-8"
        >
          {skills.map(({ name, icon: Icon }, index) => (
            <SwiperSlide key={index}>
              <div className="
                flex flex-col items-center justify-center p-6 rounded-lg
                bg-gray-900/50 hover:bg-violet-800/30 border border-transparent
                hover:border-violet-500 transition-all duration-300 h-40
              ">
                <Icon className="w-10 h-10 text-purple-400 mb-3" />
                <p className="text-lg font-medium">{name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
