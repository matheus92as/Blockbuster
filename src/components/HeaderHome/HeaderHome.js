import React from "react";
import { useNavigate } from "react-router-dom";
import { GetGenres } from "../../hooks/GetGenre";
import { goToHome } from "../../routes/coordinator";
import GenderButtons from "../GenderButtons/GenderButtons";
import { Content, GenderList, MainContainer, MainText, Top } from "./styled";

const HeaderHome = () => {
  const generos = GetGenres();
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Top>
        <p>TMDB</p>
        <div onClick={() => goToHome(navigate)}></div>
      </Top>
      <Content>
        <MainText>
          Milhões de filmes, séries e pessoas para descobrir. Explore já!
        </MainText>
        <p>FILTRE POR:</p>
        <GenderList>
          {generos.length > 0 ? (
            generos.map((genero) => {
              return <GenderButtons key={genero.id} genero={genero} />;
            })
          ) : (
            <p>Carregando generos</p>
          )}
        </GenderList>
      </Content>
    </MainContainer>
  );
};

export default HeaderHome;
