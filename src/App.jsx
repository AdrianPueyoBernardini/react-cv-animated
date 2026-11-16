import gmailIcon from './assets/gmail.png';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';

export default function App() {
  // Datos principales del CV para reutilizar tanto en el encabezado como en el enlace de correo.
  const email = 'adrianpueyo35@gmail.com';
  const github = 'https://github.com/AdrianPueyoBernardini';
  const linkedin = 'https://www.linkedin.com/in/adri%C3%A1n-pueyo-bernardini/';
  const telefono = '601334288';
  const ubicacion = 'Zaragoza';


  return (
    <div className="contenedor-principal">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* Encabezado principal: aquí aparece la identidad del perfil, el rol y los datos de contacto. */}
      <div className="header">
        <div className="foto-perfil-header">
          <img
            src="https://avatars.githubusercontent.com/u/161055578?s=400&u=e70b0457982cbd695420701367ceeb826e29e97b&v=4"
            alt="Mi foto"
            className="foto-perfil"
          />
        </div>
        <div className="informacion-header">
          <h1>Adrián Pueyo Bernardini</h1>
          <h2>Data & AI Trainee</h2>
          <p className="contacto">
            <a href={`mailto:${email}?subject=Contacto%20desde%20CV`}>
              <img src={gmailIcon} alt="Gmail" className="icono" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="icono" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="icono" />
            </a>
          </p>
        </div>
      </div>

      <div className="separador">
        {/* Columna izquierda: aquí se muestra la parte personal y técnica del perfil. */}
        <div className="contenedor-izquierda">
          {/* Sobre Mí: resumen breve para presentar quién es y qué le interesa. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>
              Estudiante de Desarrollo de Aplicaciones Multiplataforma con interés en AI & Data Engineering,
              especialmente en la arquitectura, automatización y despliegue de soluciones de IA Generativa.
              Durante estos últimos años he construido una base técnica combinando desarrollo de software,
              infraestructura cloud y proyectos prácticos orientados a despliegue y escalabilidad. He trabajado
              con tecnologías como AWS, Terraform, Docker, Python, SQL y desarrollo web moderno, explorando
              cómo se diseñan, automatizan y mantienen aplicaciones reales.
            </p>
          </div>

          {/* Habilidades: conjunto de tecnologías y competencias más relevantes del perfil. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="lista-habilidades">
              <div className="habilidad">Python</div>
              <div className="habilidad">GenAI</div>
              <div className="habilidad">AWS</div>
              <div className="habilidad">SQL</div>
              <div className="habilidad">Docker</div>
              <div className="habilidad">Terraform</div>
              <div className="habilidad">JavaScript</div>
              <div className="habilidad">React</div>
            </div>
          </div>

          {/* Proyectos: muestra trabajos aplicados y enlaces a sus repositorios o demos. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Proyectos</h2>
            <div className="lista-habilidades">
              <div className="item-experiencia">
                <h3>Despliegue de Web con consulta de API externa</h3>
                <p className="periodo">React - APIs</p>
                <br />
                <br />
                <a href="https://github.com/AdrianPueyoBernardini/react-weather-app" target="_blank" rel="noopener noreferrer">
                  Enlace
                </a>
                <p>
                  Desarrollo de web con React que consume una API externa para mostrar información dinámica.
                </p>
              </div>

              <div className="item-experiencia">
                <h3>Automatización de despliegue de servidor AWS + Docker</h3>
                <p className="periodo">AWS EC2 - AWS Cloudfront - Docker - Terraform</p>
                <br />
                <br />
                <a href="https://github.com/AdrianPueyoBernardini/react-weather-app" target="_blank" rel="noopener noreferrer">
                  Enlace
                </a>
                <p>
                  Despligue automatizado de servidores utilizando AWS con Auto Scaling Groups (ASG) y Docker.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha: aquí va la experiencia académica y profesional. */}
        <div className="contenedor-derecha">
          {/* Experiencia: recoge eventos laborales reales y responsabilidades. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia</h2>

            <div className="item-experiencia">
              <h3>Data & AI Trainee</h3>
              <p className="empresa">Deloitte</p>
              <p className="periodo">Sept 2026 - Actualidad</p>
              <p>
                Entrenamiento de modelos de lenguaje por Computer Vision así como aplicación de inteligencia
                artificial generativa.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Atención al Cliente y gestión de Material y Operaciones</h3>
              <p className="empresa">K-tuin</p>
              <p className="periodo">Oct 2024 - Sept 2026</p>
              <p>
                Experiencia desarrollada en un entorno tecnológico y de distribución, combinando atención al
                cliente con diferentes responsabilidades operativas y de gestión de material.
              </p>
            </div>
          </div>

          {/* Educación: formación académica y certificaciones relevantes. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            <div className="item-experiencia">
              <h3>Superior de Desarrollo de Aplicaciones Multiplataforma</h3>
              <p className="empresa">Los Enlaces</p>
              <p className="periodo">2026 - Actualidad</p>
            </div>

            <div className="item-experiencia">
              <h3>Master Técnico de Python para VFX</h3>
              <p className="empresa">Voxel School</p>
              <p className="periodo">2022 - 2023</p>
            </div>

            <div className="item-experiencia">
              <h3>Superior de Diseño de Videojuegos, VR y modelado 3D</h3>
              <p className="empresa">Obicex</p>
              <p className="periodo">2019 - 2021</p>
            </div>
          </div>

          {/* Certificados: validan conocimientos técnicos y competencias adicionales. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Certificados</h2>

            <div className="item-experiencia">
              <h3>AWS Certified Cloud Practitioner</h3>
              <p className="empresa">AWS</p>
              <p className="periodo">2025</p>
            </div>

            <div className="item-experiencia">
              <h3>IT Specialist - JavaScript</h3>
              <p className="empresa">Person Vue Hiberus University</p>
              <p className="periodo">2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}