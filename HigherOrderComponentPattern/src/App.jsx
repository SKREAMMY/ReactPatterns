import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fetchcontainer from "./components/container/fetchcontainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Fetchcontainer />
    </>
  );
}

export default App;
