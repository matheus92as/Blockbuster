import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetFilmByGenre = (page, genre, location) => {
  const [newList, setNewList] = useState({});

  async function FilmGenre() {
    const response = await axios.get(
      `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BRL&page=${page}&with_genres=${genre}`
    );
    try {
      setNewList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FilmGenre();
  }, [location]);
  return newList;
};
