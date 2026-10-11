import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carga asíncrona de datos desde el archivo JSON externo usando useEffect
  useEffect(() => {
    fetch('./games.json')
      .then(response => response.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los videojuegos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <div id="inicio" className="text-white text-center py-5 mb-4 shadow-inner" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0099ff 100%)', marginTop: '56px' }}>
          <div className="container py-4">
            <h1 className="display-4 fw-bold">Bienvenido a GameStore Online</h1>
            <p className="lead">Los mejores videojuegos, al mejor precio y con la tecnología más avanzada.</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2 text-muted">Cargando catálogo...</p>
          </div>
        ) : (
          <Catalog games={games} />
        )}

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;