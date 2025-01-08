import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useFetch } from "./states/useFetch";

function App() {
  const data = useFetch("https://dummyjson.com/products");

  if (!data) return null;

  return (
    <>
      <div>
        {data?.data?.products?.map((d) => (
          <div key={d.id}>{d.title}</div>
        ))}
      </div>
      {/* <div>Result is {data?.data?.total}</div> */}
    </>
  );
}

export default App;
