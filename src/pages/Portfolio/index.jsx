import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Header from '../../Components/Header';

function Portfolio() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (showPopup) {
    }
  }, [showPopup]);

  return (
    <div className='background_portfolio'>
      <Header />

      <div className='container_portfolio'>

      <div className='container_portfolio'>
        <div className="card">
          <div className="overlay">
            <h1>Saint Juan Chef's</h1>
            <button onClick={togglePopup} className='btn'>Acessar</button>
          </div>
        </div>
      </div>

        <div className='container_portfolio'>
          <div className="card">
            <div className="overlay">
              <h1>Saint Juan Chef's</h1>
              <button onClick={togglePopup} className='btn'>Acessar</button>
            </div>
          </div>
        </div>

        <div className='container_portfolio'>
        <div className="card">
          <div className="overlay">
            <h1>Saint Juan Chef's</h1>
            <button onClick={togglePopup} className='btn'>Acessar</button>
          </div>
        </div>
      </div>

      </div>

      <div className='container_portfolio'>

      <div className='container_portfolio'>
        <div className="card">
          <div className="overlay">
            <h1>Saint Juan Chef's</h1>
            <button onClick={togglePopup} className='btn'>Acessar</button>
          </div>
        </div>
      </div>

      <div className='container_portfolio'>
        <div className="card">
          <div className="overlay">
            <h1>Saint Juan Chef's</h1>
            <button onClick={togglePopup} className='btn'>Acessar</button>
          </div>
        </div>
      </div>

      <div className='container_portfolio'>
        <div className="card">
          <div className="overlay">
            <h1>Saint Juan Chef's</h1>
            <button onClick={togglePopup} className='btn'>Acessar</button>
          </div>
        </div>
      </div>

      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Conteúdo do Pop-up</p>
            <button onClick={togglePopup}>Fechar Pop-up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
