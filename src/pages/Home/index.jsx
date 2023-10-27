import './Home.css';
import fotoeu from '../../Assets/eu1.jpg';
import Header from '../../Components/Header';

function Home(){
  return(
      <div className='background_home'>
        <Header/>

          <section className='texto_home'>
            <h1 className='texto1'>Enzo Rocha</h1>
            <h2 className='texto2'>FrontEnd Portfolio</h2>
          </section>

          <section className='foto_home'>
            <img src={fotoeu} alt='imagem perfil'/>
          </section>

      </div>
  );
}

export default Home;