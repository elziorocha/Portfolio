import './Contato.css';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa';
import Header from '../../Components/Header';

function Contato(){
  return(
    <div className='background_contato'>
        <Header/>
        
          <section className='contatos'>
            <FaEnvelopeSquare className='email'/>
            <h3>rochasenzo.04@gmail.com</h3>

            <FaWhatsappSquare className='zap'/>
            <h3>(42) 98401-8839</h3>
          </section>

          <section className='contatos2'>
            <FaLinkedin className='linkedin'/>
            <h3><a href="https://www.linkedin.com/in/elziorocha">linkedin.com/in/elziorocha</a></h3>

            <FaGithubSquare className='github'/>
            <h3><a href='https://github.com/elziorocha'>github.com/elziorocha</a></h3>
          </section>

    </div>
  );
}

export default Contato;