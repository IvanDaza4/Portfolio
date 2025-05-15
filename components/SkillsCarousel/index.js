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
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";
import { motion } from "framer-motion";

import "swiper/css";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Next", icon: SiNextdotjs },
  { name: 'Tailwind', icon: SiTailwindcss},
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NoSQL", icon: SiMongodb },
  { name: "Figma", icon: SiFigma },
  { name: "Github", icon: SiGithub },
];

export default function SkillsCarousel() {
  return (
    <div className="w-full py-12 text-white lg:mb-20 lg:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10">Mis Habilidades.</h2>

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
            <SwiperSlide key={index} role="listitem" aria-label={name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="
                  flex flex-col items-center justify-center p-6 rounded-2xl
                  bg-gray-900/40 hover:bg-purple-700/20 border border-purple-700/10
                  hover:shadow-lg shadow-purple-700/10 transition-all duration-300
                  backdrop-blur-md h-40
                "
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mb-3" />
                <p className="text-sm md:text-lg font-medium">{name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
