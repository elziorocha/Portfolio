import React from 'react';
import './Portfolio.css';
import Header from '../../Components/Header';
import ChatRoom from '../../Assets/chatroom.png';
import WeatherApp from '../../Assets/weatherapp.png';
import ArcadiaX from '../../Assets/arcadiax.png';
import Saint from '../../Assets/Saint.png';

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
            <button onClick={() => openPopup('- Chatroom -\n\nAplicação de chat para usuários, criada com o uso de Node.Js e socket.io')}>Infos</button>
            <h1>Chatroom</h1>
            <a href='https://chatroom-3qbp.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={WeatherApp} alt="Card 2" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Wheater App - \n\nAplicação que mostra temperatura e clima atual da cidade desejada, utilizando consumo de API e Node.Js')}>Infos</button>
            <h1>Weather App</h1>
            <a href='https://weatherapp-2p09.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={ArcadiaX} alt="Card 3" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Arcadia X - \n\nPágina Web sobre site de avaliação de jogos, feita em React.Js, utilizando diversos recursos como API, Redux, Firebase e Rotas')}>Infos</button>
            <h1>Arcadia X</h1>
            <a href="https://65a6f438e8af3e243890f89b--arcadiax.netlify.app" className="card-text">Acessar</a>
          </div>
        </div>
      </div>

      <div className='container_portfolio'>
        <div className="card">
          <img src={Saint} alt="Card 4" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Chatroom -\n\nAplicação de chat para usuários, criada com o uso de Node.Js e socket.io')}>Infos</button>
            <h1>Chatroom</h1>
            <a href='https://saintjuanchefs.netlify.app' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 5" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Wheater App - \n\n')}>Infos</button>
            <h1>Weather App</h1>
            <a href='https://saintjuanchefs.netlify.app' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 6" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Saint Juan Chef`s - \n\nAplicação teste de desenvolvimento de CRUD em React com API integrada')}>Infos</button>
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
