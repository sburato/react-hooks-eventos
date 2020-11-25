import React, { useState } from "react";
import "../styles.css";

const TotalCaracteres = () => {

  const [contator, setContador] = useState(0);

  const onChangeNumeroDeCaracteres = (frase) => { setContador(frase.length); }  

  return (
    <div>
      <input id="input-frase" onChange = { (e) => onChangeNumeroDeCaracteres(e.target.value) } 
      type="text"></input>      
      <p id="p-frase">{`Esse texto contém ${contator} caracteres.`}</p>
    </div>
  );
}

export default TotalCaracteres;