import React from 'react';
import './Portfolio.css';
import Header from '../../Components/Header';
import ChatRoom from '../../Assets/chatroom.png';
import WeatherApp from '../../Assets/weatherapp.png';
import ArcadiaX from '../../Assets/arcadiax.png';
import Login1 from '../../Assets/Login1.png';
import GlassCalendar from '../../Assets/glasscalendar.png';
import WorldTravel from '../../Assets/WorldTravel.png';

const Portfolio = () => {
  return (
    <div className='background_portfolio'>
      <Header />

      <div className='container_portfolio'>
        <div className="card">
          <img src={ChatRoom} alt="Card 1" />
          <div className='overlay'>
            <h1>Chatroom</h1>
            <a href='https://chatroom-3qbp.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={WeatherApp} alt="Card 2" />
          <div className='overlay'>
            <h1>Weather App</h1>
            <a href='https://weatherapp-2p09.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={ArcadiaX} alt="Card 3" />
          <div className='overlay'>
            <h1>Arcadia X</h1>
            <a href="https://65a6f438e8af3e243890f89b--arcadiax.netlify.app" className="card-text">Acessar</a>
          </div>
        </div>
      </div>

      <div className='container_portfolio'>
        <div className="card">
          <img src={WorldTravel} alt="Card 4" />
          <div className='overlay'>
            <h1>WorldTravel</h1>
            <a href='https://worldtravel.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={GlassCalendar} alt="Card 5" />
          <div className='overlay'>
            <h1>Glass Calendar</h1>
            <a href='https://glass-calendar.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>

        <div className="card">
          <img src={Login1} alt="Card 6" />
          <div className='overlay'>
            <h1>Login 1</h1>
            <a href='https://login1-gct3.onrender.com' className="card-text">Acessar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
