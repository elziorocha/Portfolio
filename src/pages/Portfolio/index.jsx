import './Portfolio.css';
import Header from '../../Components/Header';
import Saint from '../../Assets/Saint.png';

function Portfolio(){
  return(
    <div className='background_portfolio'>
        <Header/>

        <div className='container_portfolio'>
          <a href='https://saintjuanchefs.netlify.app/'> <img src={Saint} /></a>

          <a href='https://saintjuanchefs.netlify.app/'> <img src={Saint} /></a>
          
          <a href='https://saintjuanchefs.netlify.app/'> <img src={Saint} /></a>
        </div>

    </div>
  );
}

export default Portfolio;