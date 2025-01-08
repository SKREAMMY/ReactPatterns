import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const FetchWithLoader = (Fetchcontainer, url) => {
  return (props) => {
    console.log("props i got is ", props);

    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        let response = await fetch(url).then((res) => res.json());
        console.log(response);
        setData(response);
      }

      fetchData();
    }, []);

    if (!data) return <LoadingSpinner />;

    return <Fetchcontainer {...props} data={data} />;
  };
};

export default FetchWithLoader;
