import styled from "styled-components";

export const BrandWrapper = styled.div`
  height: auto;
  margin: 0.5rem;
  background: white;
  .header {
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem;
    font-family: "Mitr", sans-serif;
    border-bottom: 2px solid rgb(219, 221, 223);
  }
  .brand {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    &-container {
      margin: 2rem auto;
      img {
        width: 11rem;
        height: 11rem;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid rgb(219, 221, 223);
        cursor: pointer;
        transition: transform;
        :hover {
          transform: scale(1.05);
        }
      }
      text-align: center;
      font-size: 1.1.rem;
      font-weight: bold;
      font-family: "Varela Round", sans-serif;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }
`;
