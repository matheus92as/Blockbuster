import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
    height: 50vh;
    margin: 150px 10px;
    font-size: 1.5rem;
    color: white;
    position: relative;
    img {
      position: absolute;
      top: -25%;
      left: 5%;
      z-index: 1;
      width: 100%;
    }
    h1,
    p {
      z-index: 2;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .content {
        width: 100%;
        margin: 140px 10px;
      img {
        top: 15%;
        left: 1%;
      }
      h1{
        width: 60%;
        font-size: 1.3rem;
        position: absolute;
        top: 30%;
        left: 17%;
      }
      p {
        position: absolute;
        top: 45%;
        left: 17%;
        width: 60%;
        font-size: 1rem;
        z-index: 2;
      }
    }
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #5c16c5;
  color: white;
  p {
    font-size: 25px;
    font-weight: bold;
    margin: 5px 10px 5px 35px;
  }
  div {
    width: 50px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;
