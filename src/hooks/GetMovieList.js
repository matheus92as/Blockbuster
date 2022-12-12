import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetMovieList = (page, location) => {
  const [movie, setMovie] = useState([]);

  async function Movies() {
    const response = await axios.get(
      `${baseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BRL&page=${page}`
    );
    try {
      setMovie(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Movies();
  }, [location]);
  return movie;
};