import React, { useState } from "react";
import {
  HeaderWrapper,
  LoginButton,
  SignUpButton,
} from "../styles/components/Header";
const mlogo1 = require("./../img/mlogo1.png");
const mlogo2 = require("./../img/mlogo2.png");

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={mlogo2.default} />
      <div>
        <LoginButton>Login</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
