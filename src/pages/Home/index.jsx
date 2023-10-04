import './Home.css';
import fotoeu from '../../Assets/eu1.jpg';
import Header from '../../Components/Header';

function Home(){
  return(
      <div className='background_sobre'>
        <Header/>

        <section className='texto_home'>
          <h1 className='texto1'>Enzo Rocha</h1>
          <h2 className='texto2'>FrontEnd Portfolio</h2>
        </section>

        <section>
          <img src={fotoeu} alt='imagem perfil'/>
        </section>

      </div>
  );
}

export default Home;