import './Sobre.css';
import Header from '../../Components/Header';
import fotoeu2 from '../../Assets/eu2.png';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { BiLogoFirebase, BiLogoBlender } from "react-icons/bi";
import { DiMysql, DiVisualstudio } from "react-icons/di";

function Sobre() {
  return (
    <div className='background_sobre'>
      <Header />

      <div className="sobre_caixa">
        <h2>Sobre mim</h2>
        <img src={fotoeu2} alt='imagem perfil'/>
        <h3>Olá! Me chamo Enzo Rocha, tenho 19 anos e sou um estudante de Engenharia de Software cursando
          o 5º Período na Instituição Faculdade Campo Real.<br /><br/>
          Gosto muito de estudar sobre Desenvolvimento Web, sendo a minha área preferida no ramo da tecnologia!!!
        </h3>
      </div>

      <div className="sobre_caixa">
        <h3>Atualmente me designo para vaga de estágio para primeira experiência profissional, procuro buscar
          conhecimento de diferentes áreas de desenvolvimento de Softwares.
        </h3>
      </div>

      <div className="sobre_caixa">
        <h3>Competências: <br/><br/>
        - Projetos pessoais e acadêmicos desenvolvidos utilizando diversos recursos para desenvolver páginas
        e aplicações dos mais variados tipos.<br/>
        - Noções intermediárias de SQL Workbench e manuseio de banco de dados.<br/>
        - Inglês intermediário, boa noção para leitura e escrita.<br/>
        - Conhecimento em design para páginas web juntamente com noções de IHC. <br/>
        - Tenho uma ótima comunicação e desenvolvo rapidamente um bom relacionamento com colegas de grupo!
        </h3>
      </div>

      <div className="sobre_caixa">
        <h2>Tecnologias utilizadas</h2>
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