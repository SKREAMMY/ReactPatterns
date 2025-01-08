import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Data fetcher from Render Props</p>
      <DataFetcher
        url="https://dummyjson.com/products"
        render={({ data }) => (
          <div>
            <p>{data?.total}</p>
          </div>
        )}
      />
    </>
  );
}

export default App;
