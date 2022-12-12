import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetCredits = (id, location) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  async function Credits() {
    const response = await axios.get(
      `${baseUrl}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    try {
      setCast(response.data.cast);
      setCrew(response.data.crew);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    Credits();
  }, [location]);
  return [cast, crew];
};
