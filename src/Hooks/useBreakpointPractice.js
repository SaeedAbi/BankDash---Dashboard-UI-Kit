import react from "react";
//'sm': '640px',
//'md': '768px',
//'lg': '1024px',
//'xl': '1280px',
//'2xl': '1536px',
export const useBreakpointPractice = () => {
  const breakpointIncluded = [];
  const [breakpoint, setBreakpoint] = react.useState([
    {
      sm: "640",
      md: "768",
      lg: "1024",
      xl: "1280",
      xxl: "1536",
    },
  ]);
  for (const [key, value] of Object.entries(breakpoint)) {
    breakpointIncluded.push(Number(value));
    //[640,768,1024,1280,1536]
    const finalSizes = breakpointIncluded.filter(
      (width) => width < window.innerWidth,
    );
  }
  react.useEffect(() => {
    window.addEventListener("resize", finalSizes);
  }, []);
};
