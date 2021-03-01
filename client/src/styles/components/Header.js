import styled from "styled-components";
import { devices } from "./../utils/Devices";

export const HeaderWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 98vw;
  font-weight: bold;
  box-shadow: 0 0px 10px black;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  padding: 0.5rem 1rem;
  & .logo1 {
    display: none;
  }
  & .logo2 {
    cursor: pointer;
    width: 10rem;
  }
`;

export const LoginButton = styled.button`
  color: white;
  background: #6bd50e;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-left: 2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  :hover {
    background: green;
    transform: scale(1.1);
  }
`;

export const SignUpButton = styled(LoginButton)`
  color: white;
  background: #f58704;
  :hover {
    background: orangered;
  }
`;
