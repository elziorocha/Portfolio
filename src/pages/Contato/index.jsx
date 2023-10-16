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
            <h2 className='texto_icone'>rochasenzo.04@gmail.com</h2>
            <FaEnvelopeSquare/>
          </div>

          <div className='icon zap'>
            <h2 className='texto_icone'>(42) 98401-8839</h2>
            <FaWhatsappSquare/>
          </div>

          <div className='icon linkedin'>
            <h2 className='texto_icone'>LinkedIn</h2>
            <a className="linkedin_link" href='https://www.linkedin.com/in/elziorocha'><FaLinkedin/></a>
          </div>

          <div className='icon github'>
            <h2 className='texto_icone'>GitHub</h2>
            <a className='github_link' href='https://github.com/elziorocha'><FaGithubSquare/></a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contato;