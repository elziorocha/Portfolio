import './Sobre.css';
import Header from '../../Components/Header';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { BiLogoFirebase, BiLogoBlender } from "react-icons/bi";
import { DiMysql, DiVisualstudio } from "react-icons/di";

function Sobre() {
  return (
    <div className='background_sobre'>
      <Header />

      <div className="sobre_caixa">
        <h2>Sobre mim</h2>
        <h3>Olá! Me chamo Enzo Rocha, sou um estudante cursando o 4º Período de Engenharia de Software,
          na Instituição Faculdade Campo Real.<br />Gosto muito de estudar sobre Desenvolvimento Web, sendo
          a minha área preferida no ramo da tecnologia!!!
        </h3>
      </div>

      <div className="sobre_caixa">
        <h2>Tecnologias utilizadas em projetos</h2>
        <div className='icons'>
          <DiVisualstudio className='vscode' /> <FaHtml5 className='html' /> <FaCss3Alt className='css' />
          <FaBootstrap className='bootstrap'/> <FaJsSquare className='js' /> <FaReact className='react' />
          <br /> <FaNodeJs className='node' /> <BiLogoFirebase className='firebase' /> <BiLogoBlender className='blender' /> <DiMysql className='sql' />
        </div>
      </div>

    </div>
  );
}

export default Sobre;