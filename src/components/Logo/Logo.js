import React from "react";
import LogoImage from "../assets/Logo.png";
// import Button from "../Button/Button";

export default function Logo() {
  return (
    <>
      <img src={LogoImage} alt="logo" width={67} height={34} />
      {/* <Button /> */}
    </>
  );
  //   <img src={require("../assets/Logo.png")} alt="logo" />;
}
