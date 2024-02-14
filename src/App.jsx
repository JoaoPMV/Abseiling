export default App;
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import React from "react";
import AguaVermelha from "./assets/AguaVermelha.jpeg";
import CanCan from "./assets/CanCan.jpg";
import Porco from "./assets/Porco.jpeg";
import Pantano from "./assets/Pantano.jpeg";
import Saulo from "./assets/Saulo.jpg";
import Joao from "./assets/Joao.jpg";
import Mauricio from "./assets/Mauricio.jpg";
import "./Components/Global.css";
import NextEvents from "./Components/NextEvents.jsx";
import Team from "./Components/Team.jsx";
import Menu from "./Components/Menu.jsx";
import LastEvents from "./Components/LastEvents.jsx";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import TeamLap from "./Components/TeamLap.jsx";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Components/logo2.png";

function App() {
  return (
    <>
      {/* Header - Smartphone */}
      <Container fluid className="d-block d-sm-none m-0 p-0" id="headerSmart">
        <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
          <Container fluid className="">
            <Navbar.Brand href="index.html">
              <img src={logo} alt="" className="logotipo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="d-flex justify-content-center me-4 anchor">
                <a href="#bannerSmart">Quem Somos</a>
                <a href="#nextEventsSmart">Próximos Eventos</a>
                <a href="#lastEventsSmart">Fotografias</a>
                <a href="#teamSmart">Equipe</a>
                <a href="#footerSmart">Contato</a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      {/* Header - Laptop */}
      <Container fluid className="d-none d-sm-block m-0 p-0" id="headerLap">
        <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
          <Container fluid className="">
            <Navbar.Brand href="index.html">
              <img src={logo} alt="" className="logotipo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="d-flex justify-content-center me-4 anchorLap">
                <a href="index.html">Início</a>
                <a href="#nextEventsLap">Próximos Eventos</a>
                <a href="#lastEventsLap">Fotos</a>
                <a href="#teamLap">Equipe</a>
                <a href="#footerLap">Contato</a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      {/* Banner - Smartphone */}
      <Container
        fluid
        className="d-block d-sm-none m-0 p-0 fundoBannerSmart"
        id="bannerSmart"
      >
        <p className="pt-4 ps-5 text-light cascading">
          Cascading - São Carlos/SP
        </p>
        <p className="ps-4 px-4 pb-4 text-light">
          Somos apaixonados por rapel, com mais de 20 anos de experiência.
          Praticamos nas cachoeiras da região de São Carlos/SP.
        </p>
      </Container>

      {/* Banner - Laptop */}
      <Container
        fluid
        className="d-none d-sm-block m-0 p-0 fundoBannerSmart"
        id="bannerLaptop"
      >
        <p className="tituloBanner text-center">Cascading - São Carlos/SP</p>
        <p className="descricaoBanner">
          Somos um grupo apaixonado por rapel e temos mais de 20 anos de
          experiência na prática esportiva. Mensalmente, praticamos cascading
          nas cachoeiras de São Carlos/SP.
        </p>
      </Container>

      {/* NextEvents - Smartphone */}
      <Container
        fluid
        className="d-block d-sm-none p-0 m-0"
        id="nextEventsSmart"
      >
        <h1 className="d-flex justify-content-center py-4 ultimosEventos">
          Próximos Eventos
        </h1>
        <div className="d-grid justify-content-center">
          <NextEvents
            foto={AguaVermelha}
            local="São Carlos/SP"
            nivel="Iniciante"
            altura="20 metros"
            data="18/02/24"
          />
          <NextEvents
            foto={CanCan}
            local="São Carlos/SP"
            nivel="Experiente"
            altura="65 metros"
            data="17/03/24"
          />
          <NextEvents
            foto={Porco}
            local="Ibaté/SP"
            nivel="Iniciante"
            altura="20 metros"
            data="19/04/24"
          />
        </div>
      </Container>

      {/* NextEvents - Laptop */}
      <Container
        fluid
        className="d-none d-sm-block p-0 m-0 pb-5"
        id="nextEventsLap"
      >
        <h1 className="d-flex justify-content-center pt-5 pb-4 fontePrincipal">
          Próximos Eventos
        </h1>
        <div className="d-flex justify-content-center gap-4">
          <NextEvents
            foto={AguaVermelha}
            local="São Carlos/SP"
            nivel="Iniciante"
            altura="20 metros"
            data="18/02/24"
          />
          <NextEvents
            foto={CanCan}
            local="São Carlos/SP"
            nivel="Experiente"
            altura="65 metros"
            data="17/03/24"
          />
          <NextEvents
            foto={Porco}
            local="Ibaté/SP"
            nivel="Iniciante"
            altura="20 metros"
            data="19/04/24"
          />
        </div>
      </Container>

      {/* LastEvents - Smartphone */}
      <Container
        fluid
        className="d-block d-sm-none p-0 m-0 pb-4 lastEvent"
        id="lastEventsSmart"
      >
        <p className="text-light text-center pt-5 ultimosEventos">
          Últimos Eventos
        </p>
        <hr className="text-light" />
        <p className="text-light px-5 buceta">
          Realizado em 19/01/24 em Ibaté/SP. A atividade contou com algumas
          pessoas superando seu medo no rapel pela primeira vez.
        </p>
        <LastEvents />
      </Container>

      {/* LastEvents - Laptop */}
      <Container
        fluid
        className="d-none d-sm-block p-0 m-0 pb-4 lastEvent"
        id="lastEventsLap"
      >
        <p className="text-light text-center pt-4 fontePrincipal">
          Últimos Eventos
        </p>
        <p className="text-center text-light">
          Realizado em 19/01/24 em Ibaté/SP. A atividade contou com algumas
          pessoas superando seu medo no rapel pela primeira vez.
        </p>
        <LastEvents />
      </Container>

      {/* Team - Smartphone */}
      <Container fluid className="d-block d-sm-none m-0 p-0" id="teamSmart">
        <div className="border border-danger pt-5">
          <h1 className="text-center pb-4 ultimosEventos">A Equipe</h1>
          <div className="d-grid justify-content-center">
            <Team
              foto={Saulo}
              nome="Saulo Belo"
              descricao="Técnico de Manutenção em Altura há 24 anos e Instrutor de Rapel há doze. 
            Possui diversos cursos e treinamentos."
            />
            <Team
              foto={Mauricio}
              nome="Maurício"
              descricao="Técnico de Manutenção em Altura há 24 anos e Instrutor de Rapel há doze. 
            Possui diversos cursos e treinamentos."
            />
            <Team
              foto={Joao}
              nome="João Vieira"
              descricao="Praticante de trekking e rapel. Psicólogo há 9 anos, 
            auxilia muitas pessoas a superar seus medos no rapel."
            />
          </div>
        </div>
      </Container>

      {/* Team - Laptop */}
      <Container fluid className="d-none d-sm-block m-0 p-0" id="teamLap">
        <h1 className="text-center py-4 fontePrincipal">A equipe</h1>
        <TeamLap
          nome="Saulo Belo"
          biografia="Técnico de Manutenção em Altura há 24 anos e Instrutor de Rapel há doze. 
            Possui diversos cursos e treinamentos."
          foto={Saulo}
        />

        <TeamLap
          nome="Maurício"
          biografia="Técnico de Manutenção em Altura há 24 anos e Instrutor de Rapel há doze. 
            Possui diversos cursos e treinamentos."
          foto={Mauricio}
        />

        <TeamLap
          nome="João Paulo Martins Vieira"
          biografia="Praticante de trekking e rapel. Psicólogo há 9 anos, 
            auxilia muitas pessoas a superar seus medos no rapel."
          foto={Joao}
        />
      </Container>

      {/* Footer - Smartphone */}
      <Container
        fluid
        className="d-block d-sm-none m-0 p-0 fundoFooterSmart"
        id="footerSmart"
      >
        <Row className="m-0">
          <Col xs={12} className="coluna1FooterSmart">
            <h1 className="footerContact ultimosEventos">CONTATO</h1>
            <hr className="m-1 text-light" />
            <p className="infoFooterSmart">
              <FaHouse />
              Av. São Paulo, 485 - Nova Veneza, Sumaré/SP
            </p>
            <p className="infoFooterSmart">
              <MdOutlineEmail />
              joaop.trilha@gmail.com
            </p>
            <p className="infoFooterSmart">
              <FaWhatsapp />
              (19) 971006604
            </p>
            <hr className="m-1 text-light" />
          </Col>
          <Col xs={12} className="text-end pe-4 py-2">
            <FaInstagram className="iconFooterSmart" />
            <FaFacebook className="iconFooterSmart" />
            <FaWhatsapp className="iconFooterSmart" />
          </Col>
        </Row>
      </Container>

      {/* Footer - Laptop */}
      <Container
        fluid
        className="d-none d-sm-block m-0 p-0 fundoBannerSmart"
        id="footerLap"
      >
        <Row className="justify-content-center m-0">
          <Col md={5} className="">
            <h1 className="footerContact fonteFooter">LINKS ÚTEIS</h1>
            <hr className="m-0 text-light" />
            <p className="my-2 text-light mao">
              <a href="index.html" className="ancora"></a>INÍCIO
            </p>

            <p className="my-2 text-light mao">
              <a href="#nextEventsLap" className="ancora"></a>PRÓXIMOS EVENTOS
            </p>

            <p className="my-2 text-light mao">
              <a href="www.google.com" className="ancora"></a>EQUIPE
            </p>
          </Col>
          <Col md={6} className="">
            <h1 className="footerContact fonteFooter">CONTATO</h1>
            <hr className="m-0 text-light" />
            <p className="my-2 text-light">
              <FaHouse className="m-2" />
              Av. São Paulo, 485 - Nova Veneza, Sumaré/SP
            </p>
            <p className="my-2 text-light">
              <MdOutlineEmail className="m-2" />
              joaop.trilha@gmail.com
            </p>
            <p className="my-2 text-light">
              <FaWhatsapp className="m-2" />
              (19) 971006604
            </p>
          </Col>
        </Row>
        <Row className="m-0">
          <Col className="text-end p-4 pt-0 gap-4">
            <a
              href="https://www.instagram.com/joao.pmv?igsh=Ym10bDdxM3F3aGVo"
              target="_blank"
            >
              <FaInstagram className="iconFooterLaptop me-3 text-light" />
            </a>

            <a
              href="https://www.instagram.com/joao.pmv?igsh=Ym10bDdxM3F3aGVo"
              target="_blank"
            >
              <FaFacebook className="iconFooterLaptop me-3 text-light" />
            </a>

            <a
              href="https://www.instagram.com/joao.pmv?igsh=Ym10bDdxM3F3aGVo"
              target="_blank"
            >
              <FaWhatsapp className="iconFooterLaptop me-3 text-light" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
