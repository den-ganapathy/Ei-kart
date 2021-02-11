import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { HeaderWrapper } from "../styles/components/Header";

export const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
};

export const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <FaShoppingBag />
        E-Mall
      </div>
    </HeaderWrapper>
  );
};

export default Header;
