import './Contato.css';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa';
import Header from '../../Components/Header';

function Contato() {
  return (
    <div className='background_contato'>
      <Header />

      <div className='container_sobre'>
        <div className='wrapper'>

          <div className='icon email'>
            <div className='tooltip'>Email</div>
            <FaEnvelopeSquare/>
          </div>

          <div className='icon zap'>
            <div className='tooltip'>Whatsapp</div>
            <FaWhatsappSquare/>
          </div>

          <div className='icon linkedin'>
            <div className='tooltip'>LinkedIn</div>
            <FaLinkedin/>
          </div>

          <div className='icon github'>
            <div className='tooltip'>GitHub</div>
            <FaGithubSquare/>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contato;