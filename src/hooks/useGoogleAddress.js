import { useState, useEffect } from "react";
import axios from "axios";

const googleApiUrl = process.env.GOOGLE_API_URL;
const googleApiKey = process.env.GOOGLE_API_KEY;

const useGoogleAddress =  address => {
  const [map, setMap] = useState({});  
  const API = `${googleApiUrl}address=${address}&key=${googleApiKey}`

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location)
  }, []);
  return map;
};

export default useGoogleAddress;