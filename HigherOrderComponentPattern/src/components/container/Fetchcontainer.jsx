import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Presentation from "../Presentation";
import FetchWithLoader from "../FetchWithLoader";

const Fetchcontainer = ({ data }) => {
  console.log("data from fc ", { data });

  return <Presentation data={data} />;
};

export default FetchWithLoader(
  Fetchcontainer,
  "https://dummyjson.com/products"
);
