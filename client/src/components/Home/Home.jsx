import React from "react";
import { Link } from "react-router-dom"; 
import patio1 from "../../assets/patio1.svg";
import patio2 from "../../assets/patio2.svg";
import patio3 from "../../assets/patio3.svg";
import patio4 from "../../assets/patio4.svg";
import patio5 from "../../assets/patio5.svg";
import patio6 from "../../assets/patio6.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <img src={patio1} alt="Imagem 1" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/carros"> 
            <img src={patio2} alt="Imagem 2" className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/carros">  
            <img src={patio3} alt="Imagem 3" className="img-fluid" />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <img src={patio4} alt="Imagem 4" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={patio5} alt="Imagem 5" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={patio6} alt="Imagem 6" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;

