import './Portfolio.css';
import Header from '../../Components/Header';
import Saint from '../../Assets/Saint.png';

function Portfolio(){
  return(
    <div className='background_portfolio'>
        <Header/>

        <div className='container_portfolio'>
        
          <div className="card">
            <div className="overlay">
              <h1>Saint Juan Chef's</h1>
            <a href='https://saintjuanchefs.netlify.app/' className='btn'>Acessar</a>
            </div>
          </div>

          <div className="card">
            <div className="overlay">
              <h1>teste</h1>
            <a href='https://saintjuanchefs.netlify.app/' className='btn'>Acessar</a>
            </div>
          </div>

          <div className="card">
            <div className="overlay">
              <h1>teste</h1>
            <a href='https://saintjuanchefs.netlify.app/' className='btn'>Acessar</a>
            </div>
          </div>

        </div>

        <div className='container_portfolio'>
        
          <div className="card">
            <div className="overlay">
              <h1>Saint Juan Chef's</h1>
            <a href='https://saintjuanchefs.netlify.app/' className='btn'>Acessar</a>
            </div>
          </div>

          <div className="card">
            <div className="overlay">
              <h1>teste</h1>
            <a href='https://saintjuanchefs.netlify.app/' className='btn'>Acessar</a>
            </div>
          </div>

          <div className="card">
            <div className="overlay">
              <h1>teste</h1>
            <a href='https://saintjuanchefs.netlify.app/' className='btn'>Acessar</a>
            </div>
          </div>

        </div>

    </div>
  );
}

export default Portfolio;