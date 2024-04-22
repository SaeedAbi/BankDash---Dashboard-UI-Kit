import React from "react";
import { useIsMobile } from "../Hooks/useIsMobile.js";

const Testam = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return <div>ss</div>;
};

export default Testam;
