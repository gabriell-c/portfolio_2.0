import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Switch from './components/toogle'; // caminho relativo
import './index.css'; // Esta linha é essencial!
import Card from './components/profile'; // caminho relativo
import BackgroundEffect from './components/backgroundEffect'; // caminho relativo
import Logo from './imgs/logo.webp';
import certificates from './imgs/certificate/HTML5-e-CSS3.webp'; // caminho relativo
import certificates2 from './imgs/certificate/Javascript.webp'; // caminho relativo
import certificates3 from './imgs/certificate/Git-e-GitHub_4.webp'; // caminho relativo
import certificates4 from './imgs/certificate/certificado-Banco-de-dados.webp'; // caminho relativo
import certificates5 from './imgs/certificate/certificado_bootstrap.webp'; // caminho relativo
import certificates6 from './imgs/certificate/certificado_typescript.webp'; // caminho relativo
import certificates7 from './imgs/certificate/PHP.webp'; // caminho relativo
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Preview3 from './read_me/preview.jpg'; // caminho relativo

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination } from 'swiper/modules';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Configuração do Dark Mode
  useEffect(() => {
    if (localStorage.getItem('theme') === 'light' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate certificates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Helmet>
        <title>Gabriel Cardoso | Desenvolvedor Web Fullstack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={Logo} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      {/* Blob background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute blob w-96 h-96 rounded-full bg-purple-500 top-20 -left-40 animate-float opacity-15 filter blur-[60px]"></div>
        <div className="absolute blob w-96 h-96 rounded-full bg-purple-500 bottom-20 -right-40 animate-float-reverse opacity-15 filter blur-[60px]"></div>
      </div>

      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-secundary-50/70 shadow-sm">
        <nav className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              <img src={Logo} alt="Logo" className="h-[50px] inline-block" />
            </a>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Início</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Sobre</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Projetos</button>
              <button onClick={() => scrollToSection('certificates')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Certificados</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contato</button>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Dark/Light mode toggle */}
              <Switch style={{ transform: 'scale(.8)' }} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

              
              {/* Mobile menu button */}
              <button
                onClick={toggleSidebar}
                className="z-50 flex flex-col space-y-1.5 focus:outline-none hidden max-md:flex"
              >
                <span
                  className={`block h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`block h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {/* Botão Hambúrguer */}
      

      {/* Overlay (fundo escuro) */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed w-[100vw] h-[100vh] left-0 top-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Mobile menu */}
           {isOpen && (
            <div
              onClick={closeSidebar}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-[100vh] w-[70vw] bg-secundary-50 text-white z-40 transform transition-all duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-8">Menu Moderno</h2>
              <nav>
                <ul className="space-y-6">
                  <li>
                    <button onClick={() => scrollToSection('home')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Início</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Sobre</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Projetos</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('certificates')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Certificados</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contato</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <BackgroundEffect />
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl  md:text-6xl font-bold mb-4">
              <span className="gradient-glow">Gabriel Cardoso</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
              Desenvolvedor Web Fullstack
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="./public/Currículo Gabriel .pdf" download="Currículo Gabriel .pdf" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition shadow-lg hover:shadow-purple-500/30">
                Baixar Currículo
              </a>
              <a onClick={() => scrollToSection('projects')} className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:text-white rounded-lg font-medium transition">
                Ver Projetos
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center max-sm:mt-[60px] max-md:mt-[80px]">
            <div className="relative">
                <Card />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre <span className="gradient-text">Mim</span></h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Quem sou eu?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Olá! Sou Gabriel Cardoso, um desenvolvedor Fullstack apaixonado por criar soluções digitais inovadoras e eficientes. 
                Com formação em Análise e Desenvolvimento de Sistemas e diversos cursos complementares, estou em busca do meu 
                primeiro emprego na área para aplicar meus conhecimentos e continuar aprendendo.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Meu objetivo é desenvolver aplicações web que não apenas atendam às necessidades dos usuários, mas que também 
                proporcionem experiências memoráveis e intuitivas. Acredito que a combinação de código limpo, boas práticas e 
                atenção aos detalhes resulta em produtos de alta qualidade.
              </p>
              
              <div className="mt-8">
                <a href="./public/Currículo Gabriel .pdf" download="Currículo Gabriel .pdf" className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition shadow-lg hover:shadow-purple-500/30">
                  <i className="fas fa-download mr-2"></i> Baixar Currículo (PDF)
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">Minhas <span className="gradient-text">Habilidades</span></h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Tecnologias Principais</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="tech-badge px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">React.js</span>
                  <span className="tech-badge px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="tech-badge px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">PHP</span>
                  <span className="tech-badge px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Worpress</span>
                  <span className="tech-badge px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Python</span>
                  <span className="tech-badge px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">SQL</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Front-end</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">HTML5</span>
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">CSS3</span>
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Tailwind CSS</span>
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Bootstrap</span>
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">TypeScript</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Ferramentas</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Git</span>
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">GitHub</span>
                  <span className="tech-badge px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus <span className="gradient-text">Projetos</span></h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi para praticar e demonstrar minhas habilidades como desenvolvedor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/gabriell-c/gomoney2.0/main/readme_img/GoMoney.png" 
                  alt="E-commerce Platform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sistema de controle financeiro</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Plataforma completa de controle financeiro com gerenciamento de despesas e receitas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">PHP</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">MySQL</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">Chart JS</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">Tailwind CSS</span>
                </div>
                <a href="https://github.com/gabriell-c/gomoney2.0" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
                  Ver no GitHub <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/gabriell-c/trayt-react/main/readme_imgs/trayt_desktop.JPG" 
                  alt="Task Management App" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gerenciamento de videos com API</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  API com vídeos de streaming consumida em app React com filtros, busca, ordenação e layout responsivo.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">Node</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">Bootstrap</span>
                </div>
                <a href="https://github.com/gabriell-c/trayt-react" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
                  Ver no GitHub <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={Preview3} 
                  alt="Social Media Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portifólio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Painel de análise de dados de redes sociais com gráficos interativos e relatórios.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">React JS</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">Tailwind CSS</span>
                </div>
                <a href="https://github.com/gabriell-c/portfolio_2.0" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
                  Ver no GitHub <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/gabriell-c" className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:text-white rounded-lg font-medium transition">
              Ver Todos os Projetos <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus <span className="gradient-text">Certificados</span></h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Certificados e qualificações que obtive ao longo da minha jornada de aprendizado.
            </p>
          </div>

        















          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-primary-900 max-md:p-3 md:p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
              <Swiper style={{
                  "--swiper-pagination-color": "#9333ea",
                  "--swiper-navigation-color": "#9333ea",
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                loop={true}
                className="mySwiper w-full max-w-4xl p-[20px] mx-auto"
              >
                <SwiperSlide>
                  <img src={certificates} alt="Certificado HTML5 e CSS3" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={certificates2} alt="Certificado JavaScript" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={certificates3} alt="Certificado React.js" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={certificates4} alt="Certificado MySQL" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={certificates5} alt="Certificado Bootstrap" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={certificates6} alt="Certificado Typescript" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={certificates7} alt="Certificado PHP" className="max-w-full rounded-2xl max-h-full object-contain" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="gradient-text">Contato</span></h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Estou disponível para oportunidades de trabalho e colaborações. Sinta-se à vontade para entrar em contato!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 justify-center align-center">
            <div className="lg:w-1/2 justify-center">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl h-full transform transition-all duration-500 hover:scale-[1.02] backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                      <i className="fas fa-envelope text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <div className="ml-4 truncate">
                      <h4 className="text-lg font-medium">E-mail</h4>
                      <a href="mailto:gabri3lcardoso07@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">gabri3lcardoso07@gmail.com</a>
                    </div>
                  </div>
                    <hr className="w-[50%] border-primary-300 dark:border-secundary-300" />

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                      <i className="fab fa-github text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <div className="ml-4 truncate">
                      <h4 className="text-lg font-medium">GitHub</h4>
                      <a href="https://github.com/gabriell-c" target="_blank" rel="noopener noreferrer" className="truncate text-purple-600 dark:text-purple-400 hover:underline">github.com/gabriell-c</a>
                    </div>
                  </div>
                    <hr className="w-[50%] border-primary-300 dark:border-secundary-300" />

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                      <i className="fab fa-linkedin text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <div className="ml-4 truncate">
                      <h4 className="text-lg font-medium">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/gabriell-cardoso/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">linkedin.com/in/gabriell-cardoso</a>
                    </div>
                  </div>
                    <hr className="w-[50%] border-primary-300 dark:border-secundary-300" />
                  <a href="https://wa.me/5516992974306" target="_blank" rel="noopener noreferrer" className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                      <i className="fab fa-whatsapp text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">WhatsApp</h4>
                      <p className="text-purple-600 dark:text-purple-400 hover:underline">(16) 99297-4306</p>
                    </div>
                  </a>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold gradient-text">Gabriel Cardoso</a>
              <p className="mt-2">Desenvolvedor Web Fullstack</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a href="https://github.com/gabriell-c" className="hover:text-purple-400 transition"><i className="fab fa-github text-xl"></i></a>
                <a href="https://www.linkedin.com/in/gabriell-cardoso/" className="hover:text-purple-400 transition"><i className="fab fa-linkedin text-xl"></i></a>
                <a href="https://wa.me/5516992974306" className="hover:text-purple-400 transition"><i className="fab fa-whatsapp text-xl"></i></a>
              </div>
              <p>&copy; 2025 Gabriel Cardoso. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        id="back-to-top" 
        className={`fixed bottom-8 right-8 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition ${showBackToTop ? 'block' : 'hidden'}`}
        onClick={backToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* CSS Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
          transition: background-color 0.3s, color 0.3s;
          scroll-behavior: smooth;
        }
        
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(90deg, #a855f7, #9333ea);
        }
        
        .card-hover {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .tech-badge {
          transition: all 0.3s;
        }
        
        .tech-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
        
        .dark .dark\\:bg-opacity-90 {
          background-color: rgba(17, 24, 39, 0.9);
        }
        
        .blob {
          filter: blur(60px);
          opacity: 0.15;
          z-index: -1;
        }
        
        .toggle-checkbox:checked {
          right: 0;
          background-color: #6b21a8;
        }
        
        .toggle-checkbox:checked + .toggle-label {
          background-color: #9333ea;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .testimonial {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;