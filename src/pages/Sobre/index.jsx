import { Link } from 'react-router-dom';
import './Sobre.css';
import Header from '../../Components/Header';

function Sobre() {
  return (
    <div className='background_sobre'>
      <Header />

      <div className="sobre_caixa">

        <h2>Quem Sou?</h2>
        <h3>Sou um estudante cursando o 4º Período de Engenharia de Software
        </h3>

      </div>
    </div>
  );
}

export default Sobre;