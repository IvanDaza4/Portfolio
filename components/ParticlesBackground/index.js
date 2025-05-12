"use client"; // Si estás usando Next.js 13+

import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.particles-container');
    const particleCount = window.innerWidth < 768 ? 30 : 100;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Tamaño aleatorio entre 1px y 3px
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Posición aleatoria
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Animación
      particle.style.animation = `move ${Math.random() * 20 + 10}s linear infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }

    // Animación keyframes
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes move {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 1;
        }
        100% {
          transform: translateY(${Math.random() * 200 - 100}vh) translateX(${Math.random() * 200 - 100}vw);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      container.innerHTML = '';
      document.head.removeChild(style);
    };
  }, []);

  return <div className="particles-container"></div>;
};

export default ParticlesBackground;