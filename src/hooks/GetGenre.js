import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetGenres = () => {
  const [genres, setGenres] = useState([]);

  async function Genres() {
    const response = await axios.get(
      `${baseUrl}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BRL`
    );
    try {
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Genres();
  }, []);
  return genres;
};
