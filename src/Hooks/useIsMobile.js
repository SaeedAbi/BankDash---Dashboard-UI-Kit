import React from "react";

const isMobileFn = () => window.innerWidth <= 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(isMobileFn);

  React.useEffect(() => {
    const resize = () => {
      setIsMobile(isMobileFn);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return isMobile;
};
