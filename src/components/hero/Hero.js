import React from "react";
import phoneImg from "./../../images/phone.svg";
import useGlobalContext from "./../../useGlobalContext";
const Hero = () => {
  const contextObject = useGlobalContext();
  console.log(contextObject);
  return <h2>hero component</h2>;
};

export default Hero;
