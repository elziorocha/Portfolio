import './Contato.css';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa';
import Header from '../../Components/Header';

function Contato() {

  const handleEmailClick = () => {
    const email = 'rochasenzo.04@gmail.com';
    const mailtoLink = `mailto:${email}`;

    window.open(mailtoLink, '_blank');
  }

  const handleWhatsappClick = () => {
    const numeroWhatsapp = '5542984018839';
    const whatsappLink = `https://wa.me/${numeroWhatsapp}`;
    window.open(whatsappLink, '_blank');
  };
  return (
    <div className='background_contato'>
      <Header />

      <div className='container_contato'>
        <div className='wrapper'>

          <div onClick={handleEmailClick} className='icon email'>
            <h2 className='texto_icone'>rochasenzo.04@gmail.com</h2>
            <FaEnvelopeSquare/>
          </div>

          <div onClick={handleWhatsappClick} className='icon zap'>
            <h2 className='texto_iconezap'>(42) 98401-8839</h2>
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

      <section className='ondas'>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </section>

    </div>
  );
}

export default Contato;