import React, { useEffect, useState } from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => {
    // Siempre devuelve blanco/gris claro independientemente del tema
    return "#e0e0e0"; // Gris claro (puedes ajustar este valor)
    // O si prefieres blanco puro:
    // return "#ffffff";
  };


  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && (
        <CustomCursor
          targets={[".link"]}
          customClass="custom-cursor"
          dimensions={30}
          fill={getCusomColor()}
          smoothness={{
            movement: 0.2,
            scale: 0.1,
            opacity: 0.2,
          }}
          targetOpacity={0.5}
          targetScale={2}
        />
      )}
    </>
  );
};

export default Cursor;
