import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: black;
  display: flex;
  background-color: white;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
  color: black;
  font-size: 2rem;
  & img {
    cursor: pointer;
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
