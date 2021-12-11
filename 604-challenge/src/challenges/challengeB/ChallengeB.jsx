import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

const ChallengeB = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <li>Id: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Email: {item.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeB;
