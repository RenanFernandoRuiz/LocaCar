import React from 'react'
import { Link } from "react-router-dom"; 
import carro1 from "../../assets/carro1.svg";
import carro2 from "../../assets/carro2.svg";
import carro3 from "../../assets/carro3.svg";
import carro4 from "../../assets/carro4.svg";
import carro5 from "../../assets/carro5.svg";
import carro6 from "../../assets/carro6.svg";
import "./Carros.css";

const Carros = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-4 mb-4">
        <img src={carro1} alt="Imagem 1" className="img-fluid" />
      </div>
      <div className="col-md-4 mb-4">
        <Link to="/carros"> 
          <img src={carro2} alt="Imagem 2" className="img-fluid" />
        </Link>
      </div>
      <div className="col-md-4 mb-4">
        <Link to="/link3"> 
          <img src={carro3} alt="Imagem 3" className="img-fluid" />
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 mb-4">
        <img src={carro4} alt="Imagem 4" className="img-fluid" />
      </div>
      <div className="col-md-4 mb-4">
        <img src={carro5} alt="Imagem 5" className="img-fluid" />
      </div>
      <div className="col-md-4 mb-4">
        <img src={carro6} alt="Imagem 6" className="img-fluid" />
      </div>
    </div>
  </div>
  )
}

export default Carros