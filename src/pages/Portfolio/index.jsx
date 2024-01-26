import React from 'react';
import './Portfolio.css';
import Header from '../../Components/Header';
import ChatRoom from '../../Assets/chatroom.png';
import WeatherApp from '../../Assets/weatherapp.png';
import ArcadiaX from '../../Assets/arcadiax.png';
import Saint from '../../Assets/Saint.png';
import GlassCalendar from '../../Assets/glasscalendar.png';
import NandoCompany from '../../Assets/nandocompany.png';

const Portfolio = () => {

  const openPopup = (text) => {
    document.getElementById('popupText').innerText = text;
    document.getElementById('popup').style.display = 'flex';
  }

  const closePopup = () => {
    document.getElementById('popup').style.display = 'none';
  }

  return (
    <div className='background_portfolio'>
      <Header />

      <div className='container_portfolio'>
        <div className="card">
          <img src={ChatRoom} alt="Card 1" />
          <div className='overlay'>
            <button onClick={() => openPopup('Aplicação de chat único para usuários, criada com o uso de Node.Js e socket.io')}>Infos</button>
            <h1>Chatroom</h1>
            <a href='https://chatroom-3qbp.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={WeatherApp} alt="Card 2" />
          <div className='overlay'>
            <button onClick={() => openPopup('Aplicação que mostra temperatura e clima atual da cidade desejada, utilizando consumo de API e Node.Js')}>Infos</button>
            <h1>Weather App</h1>
            <a href='https://weatherapp-2p09.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={ArcadiaX} alt="Card 3" />
          <div className='overlay'>
            <button onClick={() => openPopup('Página Web sobre site de avaliação de jogos, feita em React.Js, utilizando diversos recursos como API, Redux, Firebase e Rotas')}>Infos</button>
            <h1>Arcadia X</h1>
            <a href="https://65a6f438e8af3e243890f89b--arcadiax.netlify.app" className="card-text">Acessar</a>
          </div>
        </div>
      </div>

      <div className='container_portfolio'>
        <div className="card">
          <img src={NandoCompany} alt="Card 4" />
          <div className='overlay'>
            <button onClick={() => openPopup('Aplicação em Node.Js utilizada para avaliação, nesta aplicação, o foco é o uso de middlewares, testes unitários, utilização de ejs, cookies, API e Express.\n\n Login: testeprova@gmail.com\n Senha: 123456a')}>Infos</button>
            <h1>Nando Company</h1>
            <a href='https://nandocompany.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={GlassCalendar} alt="Card 5" />
          <div className='overlay'>
            <button onClick={() => openPopup('Demonstração de técnicas de CSS como glassmorfism e neomorfism, juntamente com conceitos de webdesign.\nCalendário feito com importação de código JavaScript via repositório público')}>Infos</button>
            <h1>Glass Calendar</h1>
            <a href='https://glass-calendar.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 6" />
          <div className='overlay'>
            <button onClick={() => openPopup('Aplicação teste de desenvolvimento de CRUD em React com API integrada')}>Infos</button>
            <h1>Saint Juan Chef's</h1>
            <a href='https://saintjuanchefs.netlify.app' className="card-text">Acessar</a>
          </div>
        </div>
      </div>

      <div className="popup" id="popup">
        <div className="popup-content">
          <p id="popupText"></p><br />
          <button onClick={closePopup}>Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
