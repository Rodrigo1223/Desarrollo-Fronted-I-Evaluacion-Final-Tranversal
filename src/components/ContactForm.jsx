import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setAlert({ type: 'danger', text: 'Por favor, complete todos los campos obligatorios.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlert({ type: 'danger', text: 'Por favor, ingrese un formato de correo electrónico válido.' });
      return;
    }

    setAlert({ type: 'success', text: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="bg-light py-5">
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Contacto con el Administrador</h2>
          <p className="text-muted">¿Tienes dudas o sugerencias? Escríbenos.</p>
        </div>

        {alert.text && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.text}
            <button type="button" className="btn-close" onClick={() => setAlert({ type: '', text: '' })}></button>
          </div>
        )}

        <div className="card shadow-sm border-0 p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Mensaje</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100 py-2">
              <i className="bi bi-send me-2"></i>Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;