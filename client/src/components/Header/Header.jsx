import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="master container-fluid p-0">
        <h1 className="logo">LocaCar</h1>
      </div>
      <div className="reserva">
        <a href="/reserva" className="reserva-link">RESERVA</a>
      </div>
      <div className="input">
        <input type="text" placeholder="Pesquisar" />
      </div>
    </nav>
  );
}

export default Header;
