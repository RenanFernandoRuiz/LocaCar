import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="master container-fluid p-0">
        <h1 className="logo">LocaCar</h1>
      </div>
      <div className="reserva">
        <Link to="/">
      <h1>RESERVA</h1>
      </Link>
      </div>
      <div className="input">
        <input type="text" placeholder="Pesquisar" />
      </div>
    </nav>
  );
}

export default Header;
