import './Home.css';
import fotoeu from '../../Assets/eu2.png';
import Header from '../../Components/Header';

function Home(){
  return(
      <div className='background_home'>
        <Header/>

        <div className='container_home'>
          <section className='texto_home'>
            <h1>Enzo Rocha</h1>
            <h2>Web Dev Portfolio</h2>
          </section>

          <section className='foto_home'>
            <img src={fotoeu} alt='imagem de perfil'/>
          </section>
        </div>
        
      </div>
  );
}

export default Home;