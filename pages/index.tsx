import type { NextPage } from 'next'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillBell, AiFillFacebook, AiFillFlag, AiFillInstagram, AiFillLinkedin, AiFillPlayCircle, AiFillTwitterSquare, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineMenu } from "react-icons/ai";
import { HiChartBar, HiCloud, HiDesktopComputer, HiDeviceMobile, HiFingerPrint, HiLightBulb } from "react-icons/hi";
import { FcCollaboration } from "react-icons/fc";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { useRef, useState } from "react";
import FormContact from "../components/FormContact";

const Home: NextPage = () => {

//   const swiperRef = useRef();
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <Head>
        <title>Creative Mobile - Desenvolvimento de soluções sob demanda</title>
        <meta name="description" content="Creative Mobile desenvolvimento de soluções tecnologicas" />
        <meta name="keywords"
        content="aplicativo, mobile, desenvolvimento, programação, programador, portais, sistemas, startup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky" id="navbar">
        <div className="container">

            <a className="navbar-brand text-uppercase" href="/">
                <img src="images/logo-creative.png" alt="" height="35"/>
            </a>

            <button className="navbar-toggler" type="button" onClick={() => setCollapse(!collapse)}
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <AiOutlineMenu />
            </button>

            <div className={`${collapse ? 'collapse ':''}navbar-collapse`} id="navbarCollapse">
                <ul className="navbar-nav mx-auto" id="navbar-navlist">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">Principal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Nossos Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Sobre Nós</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contato</a>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <div className="me-5 flex-shrink-0 d-none d-lg-block">
                        <a className="btn btn-primary nav-btn" href="{undefined}">
                            Sou cliente
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </nav>

      <section className="section home" id="home">
        <div className="container">
            <div className="row align-items-center mt-5 mt-lg-0">
                <div className="col-lg-5">
                    <div className="home-heading">
                        <h6 className="text-uppercase text-muted">Creative Mobile</h6>
                        <h1 className="lh-sm">Transformando sonhos em <span className="text-primary">realidade</span></h1>
                    </div>
                    <div className="home-btn d-grid d-sm-block gap-3">
                        <a className="btn btn-outline-primary rounded-pill me-sm-3" href="#about">Sobre nós
                            <span className="avatar-xs">
                                <span className="avatar-title rounded-circle btn-icon">
                                    <AiFillFlag />
                                </span>
                            </span>
                        </a>
                        <a href="#">
                            <div className="d-inline-flex align-items-center">
                                <div className="flex-grow-1 me-2">
                                    <span className="text-muted fs-14">Assistir agora</span>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm">
                                        <div className="avatar-title rounded-circle modal-btn">
                                            <AiFillPlayCircle />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="ms-md-4">
                        <img className="home-img" src="/images/home.png" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="client-list">
                        <div className="row justify-content-around">
                            <div className="col-md-2 col-6">
                                <img className="img-fluid" src="images/logo/brand-logo-1.png" alt="" />
                            </div>
                            <div className="col-md-2 col-6">
                                <img className="img-fluid" src="images/logo/brand-logo-2.png" alt="" />
                            </div>
                            <div className="col-md-2 col-6">
                                <img className="img-fluid" src="images/logo/brand-logo-3.png" alt="" />
                            </div>
                            <div className="col-md-2 col-6">
                                <img className="img-fluid" src="images/logo/brand-logo-4.png" alt="" />
                            </div>
                            <div className="col-md-2 col-6">
                                <img className="img-fluid" src="images/logo/brand-logo-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid">
            <div className="row">
                <div className="home-shape-arrow">
                    <a href="#features" className="mouse-down"><i className="mdi mdi-arrow-down arrow-icon text-dark h5"></i></a>
                </div>
            </div>
        </div>
      </section>

      <section className="section features features-bg" id="features">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="text-center mb-5">
                        <h3 className="heading">O que fazemos</h3>
                        <p className="text-muted fs-17">Nosso objetivo é transformar um conceito em realidade, gerando inovação.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="card features-card">
                        <div className="card-body">
                            <div className="avatar-md mb-4">
                                <div className="avatar-title bg-primary rounded-circle">
                                    <HiDeviceMobile />
                                </div>
                            </div>
                            <h5>Desenvolvimento Mobile</h5>
                            <p className="text-muted">Criamos sua plataforma mobile de acordo com todas as especificações e
                                utilizando as mais modernas tecnologias.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card features-card">
                        <div className="card-body">
                            <div className="avatar-md mb-4">
                                <div className="avatar-title bg-primary rounded-circle">
                                  <HiDesktopComputer />
                                </div>
                            </div>
                            <h5>Desenvolvimento Web</h5>
                            <p className="text-muted">Elaboramos e desenvolvemos os mais diversos sistemas web e website.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card features-card">
                        <div className="card-body">
                            <div className="avatar-md mb-4">
                                <div className="avatar-title bg-primary rounded-circle">
                                    <HiCloud />
                                </div>
                            </div>
                            <h5>Computação em Nuvem</h5>
                            <p className="text-muted">Tenha sua infraestrutura em nuvem e reduza os custos com servidores de
                                aplicação, usamos os melhores serviços do mercado para proporcionar um ambiente de
                                qualidade.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card features-card">
                        <div className="card-body">
                            <div className="avatar-md mb-4">
                                <div className="avatar-title bg-primary rounded-circle">
                                    <HiChartBar />
                                </div>
                            </div>
                            <h5>Marketing Digital</h5>
                            <p className="text-muted">Tenha sua empresa ou serviço visto por todos na internet através das mais
                                diversas redes sociais.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card features-card">
                        <div className="card-body">
                            <div className="avatar-md mb-4">
                                <div className="avatar-title bg-primary rounded-circle">
                                    <HiFingerPrint />
                                </div>
                            </div>
                            <h5>Segurança da Informação</h5>
                            <p className="text-muted">Tenha os seus dados e seus cliente em um ambiente seguro e com baixo risco
                                de acesso não autorizado.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card features-card">
                        <div className="card-body">
                            <div className="avatar-md mb-4">
                                <div className="avatar-title bg-primary rounded-circle">
                                    <HiLightBulb />
                                </div>
                            </div>
                            <h5>Design Criativo</h5>
                            <p className="text-muted">Sua identidade visual criada utilizando os conceitos modernos do mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="text-center mb-lg-5">
                        <h3 className="heading">Quem somos</h3>
                        <p className="text-muted fs-17 mb-0">A Creative Mobile foi criada para desenvolver idéias, nas quais são
                            apenas palavras no papel.</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                    <div className="card border-0">
                        <img src="images/about.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="about-title">
                                <span></span>
                                <h6 className="text-uppercase">Inovação.</h6>
                            </div>
                            <h4>Nós construimos o que você precisa.</h4>
                            <p className="text-muted lh-base">Tenha sua idéia desenvolvida e veja ela se concretizar em todo
                                processo de criação.
                                Todos nossos projetos os cliente podem acompanhar o processo criativo para a produção de sua
                                plataforma.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4 align-items-center justify-content-between">
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="me-lg-5">
                                <div className="about-title">
                                    <span></span>
                                    <h6 className="text-uppercase">Sucesso.</h6>
                                </div>
                                <h4>O sucesso de nossos cliente é o nosso objetivo final.</h4>
                                <p className="text-muted">Nós iremos acompanhar todo o processo de evolução de sua plataforma ou
                                    serviço.
                                    Nosso objetivo é fazer você crescer no caminho certo no contexto tecnologico.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="images/about-2.png" className="img-fluid" alt="" />
                </div>
            </div>
            <div className="row align-items-center justify-content-between pt-lg-5">
                <div className="col-lg-6">
                    <div className="buy-about-img">
                        <img src="images/about-3.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="ms-lg-5">
                        <div className="about-title">
                            <span></span>
                            <h6 className="text-uppercase">Suporte.</h6>
                        </div>
                        <h4>Nossa equipe está sempre pronta a te ajudar</h4>
                        <p className="text-muted">Nossos colaboradores estão sempre a disposição para atender suas demandas,
                            seja ela uma dúvida ou incidente. Todos os atendentes são especializados para solucionar sua
                            demanda.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="bg-shape"></div>
        <div className="container">
            <div className="row gy-5 justify-content-center">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h3 className="heading">Nossos Clientes</h3>
                        <p className="text-muted">Veja as empresas que acreditam na qualidade de nossos serviços.</p>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6">
                    <span className="pricing-bg"></span>
                </div>
            </div>
        </div>
      </section>

      <section className="section testimonial">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="text-center mb-5">
                        <h3 className="heading">Como é realizado?</h3>
                        <p className="text-muted fs-17">Todo o processo de desenvolvimento é realizado de froma que o cliente
                            consiga acompanhar toda a evolução do projeto.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-3">
                    <h4>Processo de desenvolvimento</h4>
                    <p className="fs-14 text-muted">Veja quais são os passos para desenvolver o seu projeto.</p>
                    <button className="prev carousel-control-prev d-none d-lg-block" type="button">
                        <AiOutlineArrowLeft />
                    </button>
                    <button className="next carousel-control-next d-none d-lg-block" type="button">
                      <AiOutlineArrowRight />
                    </button>
                </div>
                <div className="col-lg-8">
                  <Swiper
                    navigation={{ 
                        prevEl: '.prev',
                        nextEl: '.next'
                     }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide>
                      <div className="card testimonial-box h-100">
                          <div className="card-body">
                              <img src="images/requires.png" style={{ width:100 }} />
                              <h2>Levantamento de Requisitos</h2>
                              <p className="text-muted">Nossa equipe se reunirá juntamente com todos os envolvidos no
                                  projeto para iniciar o processo de análise de toda a demanda, nessa reunião iremos fazer
                                  todo o levantamento com relação as funcionalidades, design, cores e demais informações.
                              </p>
                              <br/>

                          </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card testimonial-box h-100">
                          <div className="card-body">
                          <img src="images/proto.png" style={{ width:100 }} />
                              <h2>Prototipação</h2>
                              <p className="text-muted">
                                  Nesta fase nós iremos aplicar todos os dados coletados
                                  em nossas reuniões em um modelo visual e com o fluxo já
                                  definido, a partir dessa etapa temos um produto base para
                                  iniciar a fase de desenvolvimento.
                              </p>
                              <br/>
                          </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card testimonial-box h-100">
                        <div className="card-body">
                            <img src="images/code.png" style={{ width:100 }} />
                            <h2>Desenvolvimento</h2>
                            <p className="text-muted">
                                Nesta etapa já iremos desenvolver de fato o projeto para que
                                seja um projeto funcional aplicando toda regra de negócio. Nesta fase
                                nós utilizamos toda metologia de desenvolvimento ágil, criando sprints(etapas)
                                onde cada final de sprint nós teremos um release funcional.
                            </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card testimonial-box h-100">
                        <div className="card-body">
                            <img src="images/support.png" style={{ width:100 }} />
                            <h2>Entrega e Suporte</h2>
                            <p className="text-muted">
                                Ao ser finalizado o processo de desenvolvimento, já iniciamos o
                                processo de implantação para que seu produto já esteja disponível
                                para seus usuários nas mais diversas plataformas. Nesta etapa tambem
                                já iremos fazer o monitoramento, onde teremos um ambiente de suporte
                                para que venha atender suas demandas.
                            </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
            </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="text-center mb-5">
                        <h3 className="heading">Contato</h3>
                        <p className="text-muted mt-2">Para mais informações entre em contato conosco, nossa equipe está sempre
                            a disposição para te atender.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-lg-6">
                    <FormContact />
                </div>
                <div className="col-lg-4">
                    <div className="contact-details mb-4 mb-lg-0">
                        <p className="mb-3"><i className="mdi mdi-email-outline align-middle text-muted fs-20 me-2"></i> <span
                                className="fw-medium">suporte@creativemobile.com.br</span></p>
                        <p className="mb-3"><i className="mdi mdi-web align-middle text-muted fs-20 me-2"></i> <span
                                className="fw-medium">www.creativemobile.com.br</span></p>
                        <p className="mb-3"><i className="mdi mdi-phone align-middle text-muted fs-20 me-2"></i> <span
                                className="fw-medium">+55 69 996107521</span></p>
                        <p className="mb-3"><i className="mdi mdi-hospital-building text-muted fs-20 me-2"></i> <span
                                className="fw-medium">8:00 - 18:00</span></p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <footer className="section bg-footer">
        <div className="container">
            <div className="row g-sm-4">
                <div className="col-lg-12">
                    <div className="mb-3 mb-sm-0">
                        <img src="images/logo-creative.png" className="logo-dark" alt="" height="40" />
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6">
                    <h6 className="text-uppercase fw-semibold">Sobre Nós</h6>
                    <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                        <li><a href="{undefined}">Sobre nós</a></li>
                        <li><a href="{undefined}">Suporte</a></li>
                        <li><a href="{undefined}">GitHub Repo</a></li>
                        <li><a href="{undefined}">Slack</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 col-6">

                </div>

                <div className="col-lg-3 col-md-4 col-6 d-none d-sm-block">

                </div>
                <div className="col-lg-3 col-10">
                    <h6 className="text-uppercase fw-semibold">Social medial
                    </h6>
                    <p className="mt-md-3 pt-3 pt-md-2 fs-14">Fique informado com a creative mobile.</p>
                    <div className="footer-subcribe text-end shadow-sm d-inline-block">
                        <form action="{undefined}">
                            <input placeholder="Seu e-mail" type="email" />
                            <button type="submit" className="btn btn-primary">
                                <AiFillBell />
                            </button>
                        </form>
                    </div>
                    <div className="mt-md-4 mt-3">
                        <ul className="list-inline footer-social mb-0">
                            <li className="list-inline-item">
                                <a href="{undefined}" className="rounded">
                                    <AiFillFacebook className="text-dark" />
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="{undefined}" className="rounded">
                                    <AiFillLinkedin className="text-dark" />
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="{undefined}" className="rounded">
                                    <AiFillInstagram className="text-dark" />
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="{undefined}" className="rounded">
                                    <AiFillTwitterSquare className="text-dark" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </footer>

    </div>
  )
}

export default Home
