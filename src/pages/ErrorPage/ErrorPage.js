import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";
import { MainContainer, Top } from "./styled";
import tv from '../../assets/img/tv.png'

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Top>
        <p>TMDB</p>
        <div onClick={() => goToHome(navigate)}></div>
      </Top>
      <div className="content">
        <img src={tv} alt="Fita estragada"/>
        <h1>Página não encontrada</h1>
        <p>Clique no icone no topo para voltar a página principal</p>
      </div>
    </MainContainer>
  );
};

export default ErrorPage;
