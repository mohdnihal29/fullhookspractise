import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (resourceName) => {
  const [result, setResult] = useState([]);

  const fetchResponse = async (resourceName) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );
    setResult(response.data);
  };

  useEffect(() => {
    fetchResponse(resourceName);
  }, [resourceName]);
  return result;
};

export default useResource;
