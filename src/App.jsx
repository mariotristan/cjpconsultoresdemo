import { useState } from 'react'
import './App.css'

const sections = [
  { id: 'bienvenida', label: 'Bienvenida' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'corresponsalias', label: 'Corresponsalías' },
  { id: 'contacto', label: 'Contacto' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function App() {
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderItems = [
    {
      img: 'https://0201.nccdn.net/1_2/000/000/08d/42d/10.png',
      title: 'Contabilidad',
      desc: 'Servicios contables profesionales para empresas.'
    },
    {
      img: 'https://0201.nccdn.net/1_2/000/000/11c/193/1.png',
      title: 'Servicios Legales',
      desc: 'Asesoría legal y representación jurídica.'
    },
    {
      img: 'https://0201.nccdn.net/1_2/000/000/177/23a/2.png',
      title: 'Servicios Administrativos',
      desc: 'Gestión administrativa y consultoría empresarial.'
    }
  ]

  return (
    <div className="modern-root text-blue">
      <nav className="navbar text-blue">
        <div className="navbar-logo">
          <img src="https://0201.nccdn.net/1_2/000/000/12c/2b9/whatsapp-image-2024-11-14-at-12.50.25-pm.jpeg" alt="Logo" />
          <span className="text-blue">Duarte, Flores &amp; Asociados</span>
        </div>
        <ul className="navbar-links">
          {sections.map(s => (
            <li key={s.id} className="text-blue">
              <button className="text-blue" onClick={() => scrollToSection(s.id)}>{s.label}</button>
            </li>
          ))}
        </ul>
      </nav>
      <header className="hero-section" id="bienvenida">
        <div className="hero-bg">
          <img src="https://0201.nccdn.net/1_2/000/000/0bc/1a1/foto-del-dia-del-abogado-cjp-2022.jpeg" alt="Consultores" />
          <div className="hero-overlay">
            <h1 className="text-blue">Bienvenido a Duarte, Flores &amp; Asociados</h1>
            <p className="text-blue">Tu firma legal y de consultoría empresarial</p>
            <button className="hero-btn text-blue" onClick={() => scrollToSection('contacto')}>Contáctanos</button>
          </div>
        </div>
      </header>
      <section className="about-section" id="quienes-somos">
        <h2 className="text-blue">¿Quiénes somos?</h2>
        <p className="text-blue">Somos una firma de profesionales dedicada a la asesoría legal, contable, fiscal y de análisis de proyectos de inversión, comprometidos con nuestros clientes para darles soporte y soluciones.</p>
      </section>
      <section className="slider-section" id="servicios">
        <h2 className="text-blue">Servicios</h2>
        <div className="slider">
          <button className="slider-arrow text-blue" onClick={() => setSliderIndex((sliderIndex-1+sliderItems.length)%sliderItems.length)}>&lt;</button>
          <div className="slider-item">
            <img src={sliderItems[sliderIndex].img} alt={sliderItems[sliderIndex].title} />
            <h3 className="text-blue">{sliderItems[sliderIndex].title}</h3>
            <p className="text-blue">{sliderItems[sliderIndex].desc}</p>
          </div>
          <button className="slider-arrow text-blue" onClick={() => setSliderIndex((sliderIndex+1)%sliderItems.length)}>&gt;</button>
        </div>
        <div className="slider-dots">
          {sliderItems.map((_, i) => (
            <span key={i} className={i===sliderIndex ? 'active text-blue' : 'text-blue'} onClick={() => setSliderIndex(i)}></span>
          ))}
        </div>
      </section>
      <section className="exp-section" id="experiencia">
        <h2 className="text-blue">Experiencia</h2>
        <p className="text-blue">Más de 25 años de experiencia en administración pública y especialidades en las materias que ofrecemos. Nuestros clientes confían en nuestra experiencia para la solución eficaz de sus problemas.</p>
      </section>
      <section className="corresp-section" id="corresponsalias">
        <h2 className="text-blue">Corresponsalías</h2>
        <ul>
          <li className="text-blue">Reynosa, Tamps.</li>
          <li className="text-blue">Matamoros, Tamps.</li>
          <li className="text-blue">Cd. Victoria, Tamps.</li>
          <li className="text-blue">Monterrey, N.L.</li>
          <li className="text-blue">Torreón, Coah.</li>
          <li className="text-blue">Aguascalientes, Ags.</li>
        </ul>
      </section>
      <section className="contact-section" id="contacto">
        <h2 className="text-blue">Contáctenos</h2>
        <div className="contact-card">
          <p className="text-blue"><strong>Dirección:</strong> Calle Anahúac #1618, Col. Madero, Nuevo Laredo, TM C.P. 88270</p>
          <p className="text-blue"><strong>Teléfono:</strong> <a href="tel:52-867-1963153" className="text-blue">52-867-1963153</a></p>
          <p className="text-blue"><strong>Correo:</strong> <a href="mailto:contacto@cjpconsultores.com.mx" className="text-blue">contacto@cjpconsultores.com.mx</a></p>
          <p className="text-blue"><strong>Horario:</strong> De lunes a viernes de 10:00 a.m. a 5:00 p.m.</p>
        </div>
      </section>
      <footer className="footer text-blue">
        <p className="text-blue">&copy; {new Date().getFullYear()} Duarte, Flores &amp; Asociados. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
