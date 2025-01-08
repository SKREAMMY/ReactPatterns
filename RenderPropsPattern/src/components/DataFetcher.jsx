import React from "react";
import { useState, useEffect } from "react";

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url).then((res) => res.json());
      console.log(response);
      setData(response);
    }

    fetchData();
  }, []);

  return <div>{render({ data })}</div>;
};

export default DataFetcher;
