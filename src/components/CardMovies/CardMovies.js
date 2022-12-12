import moment from "moment";
import "moment/locale/pt";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailContainer, MainContainer } from "./styled";
import { image_Url } from "../../constants/image_Url";
import { goToDetails } from "../../routes/coordinator";

const CardMovies = (filme) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  moment.locale("PT-BR");
  const date = moment(filme.filme.release_date).format("DD MMM YYYY");

  return (
    <>
      {location.pathname.includes("detalhes") === false ? (
        <MainContainer location={location.pathname}>
          <img
            src={`${image_Url}/${filme.filme.poster_path}`}
            alt="Poster"
            onClick={() => goToDetails(navigate, filme.filme.id)}
          />
          <p>
            <strong>{filme.filme.title}</strong>
          </p>
          <p>{date}</p>
        </MainContainer>
      ) : (
        <DetailContainer location={location.pathname}>
          <img
            src={`${image_Url}/${filme.filme.poster_path}`}
            alt="Poster"
            onClick={() => goToDetails(navigate, filme.filme.id)}
          />
          <p>
            <strong>{filme.filme.title}</strong>
          </p>
          <p>{date}</p>
        </DetailContainer>
      )}
    </>
  );
};

export default CardMovies;
