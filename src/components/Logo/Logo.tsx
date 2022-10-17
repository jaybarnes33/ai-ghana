import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
const Logo = () => {
  return (
    <Image src={logo} width={80} height={50} alt="Logo" objectFit="contain" />
  );
};

export default Logo;
