import { useState } from "react";
import "./App.css";
import Header from "./assets/components/header/header.jsx";
import LadoDireito from "./assets/components/rigth/rigth.jsx";
import LadoEsquerdo from "./assets/components/left/left.jsx";

function App() {
  return (
    <>
      <Header />
      <LadoEsquerdo />
      <LadoDireito />
    </>
  );
}

export default App;
