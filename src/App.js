import React, { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagrph] = useState(false);
  const [allowtoogle, setAllowToogle] = useState(false);

  console.log("APP RUNING!");
  const allowTooglehHandler = () => {
    setAllowToogle((prevAllowToogle) => !allowtoogle);
  };

  const toogleParagraphHandler = useCallback(() => {
    if (allowtoogle) {
      setShowParagrph((prevShowParagraph) => !showParagraph);
    }
  }, [allowtoogle]);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowTooglehHandler}>Allow Toogle</Button>
      <Button onClick={toogleParagraphHandler}>Toogle Paragraph</Button>
    </div>
  );
}

export default App;
