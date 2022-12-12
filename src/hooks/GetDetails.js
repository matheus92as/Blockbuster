import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export const GetDetails = (id, location) => {
  const [details, setDetails] = useState([]);

  async function Details() {
    const response = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BRL`
    );
    try {
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    Details();
  }, [location]);
  return details;
};
