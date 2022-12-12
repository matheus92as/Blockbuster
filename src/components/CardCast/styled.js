import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 5px;
  padding-bottom: 10px;
  width: 150px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 15px grey;
  img {
    width: 95%;
    margin-top: 5px;
    border: 1px #e7e7e7 solid;
    border-radius: 5px;
  }
  p {
    align-self: flex-start;
    margin: 0;
    margin-left: 7px;
  }
`;
