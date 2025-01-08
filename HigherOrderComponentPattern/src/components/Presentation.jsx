import React from "react";

const Presentation = ({ data }) => {
  console.log("from presentation ", { data });

  return <div>Data received is {data?.total}</div>;
};

export default Presentation;
