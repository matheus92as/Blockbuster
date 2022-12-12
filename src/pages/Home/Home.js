import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CardMovies from "../../components/CardMovies/CardMovies";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import { GetMovieList } from "../../hooks/GetMovieList";
import { goToHome, goToHomePages } from "../../routes/coordinator";
import { MainContainer, MoviesList, PaginateContainer } from "./styled";
import { GlobalContext } from "../../global/GlobalContext";

const Home = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const filmes1 = GetMovieList(1, location.pathname);
  const filmesPages = GetMovieList(params.page, location.pathname);
  const { states, setter } = useContext(GlobalContext);
  const idGeneros = states.genre_ids;

  const changePage = ({ selected }) => {
    if (selected + 1 === 1) {
      goToHome(navigate);
    } else {
      goToHomePages(navigate, selected + 1);
    }
  };

  return (
    <MainContainer>
      <HeaderHome />
      {location.pathname === "/" ? (
        <MoviesList>
          {filmes1.length > 0 ? (
            filmes1
              .filter((filme) => {
                const multipleExist = idGeneros.every((value) => {
                  return filme.genre_ids.includes(value);
                });
                let result;
                if (idGeneros.length > 0) {
                  result = multipleExist;
                } else {
                  result = filme;
                }
                return result;
              })
              .map((filme) => {
                return <CardMovies key={filme.id} filme={filme} />;
              })
          ) : (
            <p>Carregando filmes</p>
          )}
        </MoviesList>
      ) : (
        <MoviesList>
          {filmesPages.length > 0 ? (
            filmesPages
              .filter((filme) => {
                const multipleExist = idGeneros.every((value) => {
                  return filme.genre_ids.includes(value);
                });
                let result;
                if (idGeneros.length > 0) {
                  result = multipleExist;
                } else {
                  result = filme;
                }
                return result;
              })
              .map((filme) => {
                return <CardMovies key={filme.id} filme={filme} />;
              })
          ) : (
            <p>Carregando filmes</p>
          )}
        </MoviesList>
      )}
      <PaginateContainer
        previousLabel={"Anterior"}
        nextLabel={"Próxima"}
        pageCount={500}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={changePage}
        onClick={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </MainContainer>
  );
};

export default Home;
