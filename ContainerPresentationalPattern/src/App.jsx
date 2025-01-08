import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Presentation from "./components/Presentation";
import ContainerComponent from "./components/ContainerComponent/ContainerComponent";

function App() {
  const [count, setCount] = useState(0);

  //Consider this, A component has to perform a fetch
  // operation to render some data. Rather than fetching
  // every time in the component, we elevate and seperate this
  // into two components, One solely to fetch and one to present
  // Now the presentation component can get the props from the
  // container component to render the data, thus eliminating the
  // need to fetch every single time.
  return (
    <>
      <ContainerComponent />
    </>
  );
}

export default App;
