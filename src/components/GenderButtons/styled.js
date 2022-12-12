import styled from "styled-components";

const selecionado = seleciona => {
    switch (seleciona) {
      case false:
        return "white";
      case true:
        return "#D18000";
      default:
        return "white";
    }
  };

export const MainContainer = styled.div`
    background-color: ${({ seleciona }) => selecionado(seleciona)};
    border-radius: 5px;   
    color: black;
    margin: 5px;
    padding: 0px 10px;
    font-weight: bold;
    transition: 0.3s;
    :hover{
        cursor: pointer;
    }
`

export const Ativo = styled.p`
    color: white;
`

export const Inativo = styled.p`
    
`