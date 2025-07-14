import { useState, useEffect } from 'react'
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

// Iconos SVG para servicios
const serviceIcons = {
  contabilidad: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#0057b8" strokeWidth="4"/><rect x="18" y="24" width="28" height="16" rx="4" fill="#e9f2fb" stroke="#0057b8" strokeWidth="2"/><text x="32" y="36" textAnchor="middle" fill="#0057b8" fontSize="12" fontFamily="Montserrat">$</text></svg>
  ),
  legales: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#0057b8" strokeWidth="4"/><rect x="22" y="20" width="20" height="24" rx="4" fill="#e9f2fb" stroke="#0057b8" strokeWidth="2"/><path d="M32 28v8" stroke="#0057b8" strokeWidth="2"/><circle cx="32" cy="36" r="2" fill="#0057b8"/></svg>
  ),
  administrativos: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#0057b8" strokeWidth="4"/><rect x="20" y="22" width="24" height="20" rx="4" fill="#e9f2fb" stroke="#0057b8" strokeWidth="2"/><rect x="28" y="30" width="8" height="8" rx="2" fill="#0057b8"/></svg>
  )
}

function App() {
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderItems = [
    {
      icon: serviceIcons.contabilidad,
      title: 'Contabilidad',
      desc: 'Servicios contables profesionales para empresas.'
    },
    {
      icon: serviceIcons.legales,
      title: 'Servicios Legales',
      desc: 'Asesoría legal y representación jurídica.'
    },
    {
      icon: serviceIcons.administrativos,
      title: 'Servicios Administrativos',
      desc: 'Gestión administrativa y consultoría empresarial.'
    }
  ]

  // Avance automático del slider cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex(prev => (prev + 1) % sliderItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [sliderItems.length])

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
          <div className="slider-item">
            {sliderItems[sliderIndex].icon}
            <h3 className="text-blue">{sliderItems[sliderIndex].title}</h3>
            <p className="text-blue">{sliderItems[sliderIndex].desc}</p>
          </div>
        </div>
        <div className="slider-dots" style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem'}}>
          {sliderItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setSliderIndex(i)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                outline: i === sliderIndex ? '2px solid #0057b8' : 'none',
                borderRadius: '50%',
                boxShadow: i === sliderIndex ? '0 0 8px #0057b8' : 'none',
                transition: 'box-shadow 0.2s, outline 0.2s',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: i === sliderIndex ? '#e9f2fb' : 'transparent',
              }}
              aria-label={sliderItems[i].title}
            >
              {sliderItems[i].icon}
            </button>
          ))}
        </div>
      </section>
      <section className="exp-section" id="experiencia">
        <h2 className="text-blue">Experiencia</h2>
        <p className="text-blue">Más de 25 años de experiencia en administración pública y especialidades en las materias que ofrecemos. Nuestros clientes confían en nuestra experiencia para la solución eficaz de sus problemas.</p>
      </section>
      <section className="corresp-section" id="corresponsalias">
        <h2 className="text-blue">Corresponsalías</h2>
        <div style={{width: '100%', maxWidth: '700px', margin: '2rem auto', textAlign: 'center', position: 'relative'}}>
          <div style={{position: 'relative', width: '100%', height: '400px'}}>
            <img src="/mapa-mexico.png" alt="Mapa de México" style={{width: '100%', height: '100%', objectFit: 'contain', border: '2px solid #0057b8', borderRadius: '16px', background: '#e9f2fb'}} />
            {/* Marcadores superpuestos */}
            {/* Reynosa */}
            <div style={{position: 'absolute', left: '81%', top: '55%'}}>
              <div style={{width: 24, height: 24, background: '#0057b8', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 6px #0057b8'}}></div>
              <span style={{color: '#0057b8', fontWeight: 'bold', fontSize: 14, marginTop: 2, display: 'block'}}>Reynosa</span>
            </div>
            {/* Matamoros */}
            <div style={{position: 'absolute', left: '85%', top: '57%'}}>
              <div style={{width: 24, height: 24, background: '#0057b8', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 6px #0057b8'}}></div>
              <span style={{color: '#0057b8', fontWeight: 'bold', fontSize: 14, marginTop: 2, display: 'block'}}>Matamoros</span>
            </div>
            {/* Cd. Victoria */}
            <div style={{position: 'absolute', left: '75%', top: '60%'}}>
              <div style={{width: 24, height: 24, background: '#0057b8', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 6px #0057b8'}}></div>
              <span style={{color: '#0057b8', fontWeight: 'bold', fontSize: 14, marginTop: 2, display: 'block'}}>Cd. Victoria</span>
            </div>
            {/* Monterrey */}
            <div style={{position: 'absolute', left: '68%', top: '40%'}}>
              <div style={{width: 24, height: 24, background: '#0057b8', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 6px #0057b8'}}></div>
              <span style={{color: '#0057b8', fontWeight: 'bold', fontSize: 14, marginTop: 2, display: 'block'}}>Monterrey</span>
            </div>
            {/* Torreón */}
            <div style={{position: 'absolute', left: '48%', top: '38%'}}>
              <div style={{width: 24, height: 24, background: '#0057b8', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 6px #0057b8'}}></div>
              <span style={{color: '#0057b8', fontWeight: 'bold', fontSize: 14, marginTop: 2, display: 'block'}}>Torreón</span>
            </div>
            {/* Aguascalientes */}
            <div style={{position: 'absolute', left: '53%', top: '62%'}}>
              <div style={{width: 24, height: 24, background: '#0057b8', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 6px #0057b8'}}></div>
              <span style={{color: '#0057b8', fontWeight: 'bold', fontSize: 14, marginTop: 2, display: 'block'}}>Aguascalientes</span>
            </div>
          </div>
        </div>
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
