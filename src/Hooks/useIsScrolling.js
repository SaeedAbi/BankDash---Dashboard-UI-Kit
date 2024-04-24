import react, { useEffect, useState } from "react";

export const useIsScrolling = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrolling = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return window.removeEventListener("scroll", scrolling);
  }, []);
  return scrollPosition;
};
