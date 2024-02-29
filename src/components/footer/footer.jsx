import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";  
import * as Icon from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="align-items-left d-flex">
          <p>An IBM Group Company</p>
          <p>@sofitnsa Todos os direitos reservados</p>
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <Link to="/condicoes-de-utilizacao">Condições de Utilização</Link>
        </div>
        <div className="right-content">
          <Link to="/sobre-nos">Sobre Nós</Link>
          <Link to="/contacte-nos">Contacte-nos</Link>
          <div className="social-icons">
            <Icon.Google className="text-white"/> 
            <Icon.Facebook className="text-white"/> 
            <Icon.TwitterX className="text-white"/>        
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
