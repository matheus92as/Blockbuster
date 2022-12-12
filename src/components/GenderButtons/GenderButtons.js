import React, { useContext, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Ativo, Inativo, MainContainer } from "./styled";

const GenderButtons = (genero) => {
  const [seleciona, setSeleciona] = useState(false);
  const { states, setter } = useContext(GlobalContext);
  const idGeneros = states.genre_ids;
  const setIdGeneros = setter.setGenre_ids;

  const clickDesativo = (id) => {
    let idList = [...idGeneros];
    idList.push(id);
    setSeleciona(!seleciona);
    setIdGeneros(idList);
  };

  const clickAtivo = (id) => {
    let idList = [...idGeneros];
    for (var i = 0; i < idList.length; i++) {
      if (idList[i] === id) {
        idList.splice(i, 1);
      }
    }
    setIdGeneros(idList);
    setSeleciona(!seleciona);
  };

  return (
    <MainContainer seleciona={seleciona}>
      {seleciona === false ? (
        <Inativo onClick={() => clickDesativo(genero.genero.id)}>
          {genero.genero.name}
        </Inativo>
      ) : (
        <Ativo onClick={() => clickAtivo(genero.genero.id)}>
          {genero.genero.name} ⓧ
        </Ativo>
      )}
    </MainContainer>
  );
};

export default GenderButtons;
