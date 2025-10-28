import React, { useState } from 'react';
import './App.css';

export default function SenaLandingPage() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.nombres && formData.apellidos && formData.mensaje) {
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ nombres: '', apellidos: '', mensaje: '' });
      }, 3000);
    }
  };

  const programas = [
    'ADSO',
    'Redes de Datos',
    'Animación 3D',
    'Logística',
    'Mercadeo',
    'Sistemas'
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>SENA</h1>
        <nav className="nav-menu">
          <a href="#inicio" className="nav-link">INICIO</a>
          <a href="#programas" className="nav-link">PROGRAMAS</a>
          <a href="#contacto" className="nav-link">CONTACTO</a>
        </nav>
        <p className="text-xl text-white mt-4">CGMLTI BOGOTÁ</p>
      </header>

      <section className="programs-section" id="programas">
        <h2 className="section-title">NUESTROS PROGRAMAS</h2>
        <div className="programs-grid">
          {programas.map((programa) => (
            <div key={programa} className="program-card">
              {programa}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form" id="contacto">
        <h2 className="section-title">CONTACTO</h2>
        {submitted && (
          <div className="success-message">
            ¡Mensaje enviado con éxito!
          </div>
        )}
        <div className="form-group">
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="NOMBRES"
            className="form-control"
          />
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="APELLIDOS"
            className="form-control"
          />
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="MENSAJE"
            rows={4}
            className="form-control"
          />
          <button onClick={handleSubmit} className="submit-btn">
            ENVIAR
          </button>
        </div>
      </section>
    </div>
  );
}