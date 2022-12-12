import React from "react";
import { MainContainer } from "./styled";
import { image_Url } from "../../constants/image_Url";

const CardCast = (ator) => {
  return (
    <MainContainer>
      <img src={`${image_Url}/${ator.ator.profile_path}`} alt="Foto" />
      <p>
        <strong>{ator.ator.name}</strong>
      </p>
      <p>{ator.ator.character}</p>
    </MainContainer>
  );
};

export default CardCast;
