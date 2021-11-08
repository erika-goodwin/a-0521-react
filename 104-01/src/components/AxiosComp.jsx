import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosComp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/")
      .then((response) => setData(response.data.results))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h2>Loading ......</h2>;

  return (
    <div>
      <h2>Axios</h2>
      { data.map((item)=>(
          <div className='row' key={item.name}>
              <p>{item.name}</p>
              <p>{item.gender}</p>
          </div>
      ))}
    </div>
  );
};

export default AxiosComp;
