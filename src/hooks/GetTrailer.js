import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetTrailer = (id, location) => {
  const [trailer, setTrailer] = useState({});

  async function Trailers() {
    const response = await axios.get(
      `${baseUrl}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    try {
      const [filtroTrailer] = response.data.results.filter((trailer) => {
        return trailer.name === "Official Trailer";
      });
      setTrailer(filtroTrailer);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Trailers();
  }, [location]);
  return trailer;
};
