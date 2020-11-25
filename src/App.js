import React from "react";
import Titulo from "./components/Titulo";
import TotalCaracteres from "./components/TotalCaracteres";
import "./styles.css";

const App = () => {
  return (
    <div>
      <center>
        <Titulo />
        <TotalCaracteres />
      </center>
    </div>
  );
}

export default App;
