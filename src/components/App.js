import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setData(data);
      setIsLoading(!isLoading);
    };
    fetchData();
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <img src={data.message} alt="A Random Dog"></img>
    </div>
  );
};

export default App;
