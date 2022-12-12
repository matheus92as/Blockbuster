import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetRecommendations = (id, location) => {
  const [movie, setMovie] = useState([]);

  async function Recommendations() {
    const response = await axios.get(
      `${baseUrl}/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BRL&page=1`
    );
    try {
      setMovie(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Recommendations();
  }, [location]);
  return movie;
};
