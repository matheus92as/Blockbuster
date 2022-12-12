import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15%;
  margin: 15px;
  img {
    width: 100%;
    border-radius: 5px;
    border: 1px #e7e7e7 solid;
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      transform: scale(1.05);
      box-shadow: 0px 0px 15px grey;
    }
  }
  p {
    margin: 5px 0;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 35%;
    p {
      font-size: 0.9rem;
    }
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;
  margin: 15px;
  img {
    width: 100%;
    border-radius: 5px;
    border: 1px #e7e7e7 solid;
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      transform: scale(1.05);
      box-shadow: 0px 0px 15px grey;
    }
  }
  p {
    margin: 5px 0;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 120px;
    margin: 5px;
    p {
      font-size: 0.9rem;
    }
  }
`;
