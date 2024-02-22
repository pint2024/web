import React, { useState } from 'react';
import Alert from '../components/alert/alert';

function Inicial () {

  const NomeUtilizador = localStorage.getItem('NomeUtilizador');
  const Foto = localStorage.getItem('Foto');


  const [showMensagem, setShowMensagem] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const logout = () =>{
    setShowMensagem(true);
    localStorage.clear();
    window.location.href = '/';
  }

    return (
      <nav className='navbar navbar-expand-lg p-3 border-bottom navbar-primary bg-custom-primary fixed-top navbar-hidden'>
      <div className="container d-flex justify-content-between align-items-center">
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
        <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
          <ul className='navbar-nav text-light'>
            <li className='nav-item active'>
              <a className='nav-link text-light' href='/'>Página Inicial</a>
            </li>
            <li className="nav-item dropdown ">
                <span className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    Vagas
                </span>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/vagas">Vagas</a></li>
                    <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown ">
                <span className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    Ideias
                </span>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/criarIdeia">Propor Ideias</a></li>
                    <li><a className="dropdown-item" href="/ideias">Listas de Ideias</a></li>
                </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='/oportunidades'>Oportunidades</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='/beneficios'>Benefícios</a>
            </li>
            <li className="nav-item dropdown ">
                <span className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    Administração
                </span>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/utilizadores">Utilizadores</a></li>
                    <li><a className="dropdown-item" href="/reporting">Reporting</a></li>

                </ul>
            </li>
          </ul>
        </div>
        <div className="btn-group">
          <div className='collapse navbar-collapse justify-content-end  text-light' id='navbarNav'>
            {NomeUtilizador} &nbsp;&nbsp;
          </div>
          <div className="dropdown text-end ">
            <div className="d-block text-light text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" role="button" aria-expanded="false">
              <img src={Foto} alt="mdo" width="32" height="32" className="rounded-circle"/>
            </div>
            <ul className="dropdown-menu text-small dropdown-menu-end " >
              <li><a className="dropdown-item" href="/calendario">Calendário</a></li>
              <li><a className="dropdown-item" href="/perfil">Perfil</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" onClick={() => setShowAlert(true)}>Sair</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Alert
          show={showAlert}
          onHide={handleCloseAlert}
          nome="Terminar Sessão"
          textbody = "Pretende terminar a sua sessão?"
          click={logout}
          mensagem="Foi feito o logout com sucesso"
          enviadoComSucesso={showMensagem}
          />  
    </nav>
    );

}

export default Inicial ;