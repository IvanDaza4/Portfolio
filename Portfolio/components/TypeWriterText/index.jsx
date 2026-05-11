import { useEffect, useState } from "react";

export default function TypewriterText({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    
    // Debug: verificar el texto recibido
    console.log("Texto recibido:", text);
    console.log("Longitud:", text.length);
    console.log("Caracteres:", [...text].map(c => `${c} (${c.charCodeAt(0)})`));

    const interval = setInterval(() => {
      if (i < text.length) {
        const currentChar = text.charAt(i);
        console.log(`Escribiendo caracter ${i}: ${currentChar} (${currentChar.charCodeAt(0)})`);
        setDisplayedText(prev => prev + currentChar);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p
      className="mt-2 text-xl laptop:text-xl w-full laptop:w-3/5"
      style={{ fontFamily: "Courier, monospace", whiteSpace: "pre-wrap" }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}