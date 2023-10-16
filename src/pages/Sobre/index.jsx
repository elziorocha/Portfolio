import './Sobre.css';
import Header from '../../Components/Header';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase, BiLogoBlender } from "react-icons/bi";
import { DiMysql, DiVisualstudio } from "react-icons/di";

function Sobre() {
  return (
    <div className='background_sobre'>
      <Header />

      <div className="sobre_caixa">
        <h2>Quem Sou?</h2>
        <h3>Sou um estudante cursando o 4º Período de Engenharia de Software,
          na Instituição Faculdade Campo Real
        </h3>
      </div>

      <div className="sobre_caixa">
        <h2>O que busco?</h2>
        <h3>-icons-
        </h3>
      </div>

      <div className="sobre_caixa">
        <h2>Tecnologias Utilizadas</h2>
        <DiVisualstudio/> <FaHtml5/> <FaCss3Alt/> <FaJsSquare/> <FaReact/> 
        <br/> <FaNodeJs/> <BiLogoFirebase/> <BiLogoBlender/> <DiMysql/>
      </div>

    </div>
  );
}

export default Sobre;