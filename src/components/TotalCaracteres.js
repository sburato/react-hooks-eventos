import React, { Component } from "react";
import "../styles.css";

class TotalCaracteres extends Component {
  constructor(props) {
    super(props);
    this.state = { numeroDeCaracteres: 0 };
  }

  onChangeNumeroDeCaracteres = (frase) => {
    this.setState({
      numeroDeCaracteres: frase.length,
    });
  }

  render() {
    return (
      <div>
        <input id="input-frase" onChange = { (e) => this.onChangeNumeroDeCaracteres(e.target.value) } 
        type="text"></input>      
        <p id="p-frase">{`Esse texto contém ${this.state.numeroDeCaracteres} caracteres.`}</p>
      </div>
    );
  }
}

export default TotalCaracteres;