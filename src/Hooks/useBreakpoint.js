import react, { useEffect } from "react";

export const useBreakpoint = () => {
  const [tailwindSize, setTailwindSize] = react.useState([]);
  const sizeChanges = () => {
    const width = window.innerWidth;
    let size = [];
    //'sm': '640px',
    //'md': '768px',
    //'lg': '1024px',
    //'xl': '1280px',
    //'2xl': '1536px',
    if (width < 640) size.push("sm");
    else if (width < 768) size.push("md");
    else if (width < 1024) size.push("xl");
    else if (width < 1536) size.push("2xl");
    setTailwindSize(size);
  };
  useEffect(() => {
    sizeChanges();
    window.addEventListener("resize", sizeChanges);
    return window.removeEventListener("resize", sizeChanges);
  }, []);
  return tailwindSize;
};
