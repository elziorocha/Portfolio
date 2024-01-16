import React from 'react';
import './Portfolio.css';
import Header from '../../Components/Header';
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
          <img src={Saint} alt="Card 1" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Chatroom -\n\nAplicação de chat para usuários, criada com o uso de Node.Js e socket.io')}>Infos</button>
            <h1>Chatroom</h1>
            <a href='https://saintjuanchefs.netlify.app' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 2" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Wheater App - \n\n')}>Infos</button>
            <h1>Weather App</h1>
            <a className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 2" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Wheater App - \n\n')}>Infos</button>
            <h1>Weather App</h1>
            <a className="card-text">Acessar</a>
          </div>
        </div>
      </div>

      <div className='container_portfolio'>
        <div className="card">
          <img src={Saint} alt="Card 1" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Chatroom -\n\nAplicação de chat para usuários, criada com o uso de Node.Js e socket.io')}>Infos</button>
            <h1>Chatroom</h1>
            <a href='https://saintjuanchefs.netlify.app' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 2" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Wheater App - \n\n')}>Infos</button>
            <h1>Weather App</h1>
            <a className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Saint} alt="Card 2" />
          <div className='overlay'>
            <button onClick={() => openPopup('- Wheater App - \n\n')}>Infos</button>
            <h1>Weather App</h1>
            <a className="card-text">Acessar</a>
          </div>
        </div>
      </div>

      <div className="popup" id="popup">
        <div className="popup-content">
          <p id="popupText"></p><br /><br />
          <button onClick={closePopup}>Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
