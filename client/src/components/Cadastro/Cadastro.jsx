import React from 'react';
import './Cadastro.css';
import car from "../../assets/car.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cadastro = () => {
  return (
    <div className="container1 mt-5">
      <div className="ajuste">
        <img src={car} alt="" />
      </div>
      <h2 className="text-danger">Cadastro</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">CPF</label>
          <input type="text" className="form-control" id="cpf" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input type="tel" className="form-control" id="telefone" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="patio" className="form-label">Pátio</label>
          <input type="text" className="form-control" id="patio" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="carro" className="form-label">Carro</label>
          <input type="text" className="form-control" id="carro" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="total" className="form-label">Total</label>
          <input type="number" className="form-control" id="total" required />
        </div>

        <h5 className="text-danger">Retirada: 22/10/2024</h5>
        <h5 className="text-danger">Devolução: 25/10/2024</h5>

        <button type="submit" className="btn btn-danger mt-3">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
