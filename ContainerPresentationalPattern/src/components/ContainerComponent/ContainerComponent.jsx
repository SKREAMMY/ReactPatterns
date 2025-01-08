import React, { useEffect, useState } from "react";
import Presentation from "../Presentation";

const ContainerComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchdata() {
      let dataresponse = // Could be GET or POST/PUT/PATCH/DELETE
        await fetch("https://dummyjson.com/test").then((res) => res.json());
      setData(dataresponse);
      console.log("data got is ", dataresponse);
    }
    fetchdata();
  }, []);

  if (!data) return null;

  return <Presentation data={data} />;
};

export default ContainerComponent;
