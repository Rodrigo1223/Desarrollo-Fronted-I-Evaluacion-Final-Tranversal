import React, { useState } from 'react';

function Catalog({ games }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredGames = selectedCategory === 'Todos' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <section id="catalogo" className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark">Catálogo de Videojuegos</h2>
        <p className="text-muted">Explora nuestros títulos disponibles y filtra por tu categoría favorita</p>
        
        <div className="btn-group mt-3" role="group">
          {['Todos', 'RPG', 'Acción', 'Deportes'].map(category => (
            <button
              key={category}
              type="button"
              className={`btn btn-outline-primary ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <div className="col" key={game.id}>
              <div className="card h-100 shadow-sm border-0">
                <img 
                  src={game.image} 
                  className="card-img-top" 
                  alt={game.name} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-secondary">{game.category}</span>
                    <div className="text-warning small">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi ${i < game.rating ? 'bi-star-fill' : 'bi-star'}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <h5 className="card-title fw-bold">{game.name}</h5>
                  <p className="card-text text-muted small">{game.description}</p>
                  <div className="mt-auto">
                    <p className="fw-bold text-success fs-5 mb-2">${game.price.toLocaleString('es-CL')}</p>
                    <button className="btn btn-primary w-100">
                      <i className="bi bi-cart-plus me-2"></i>Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">No se encontraron videojuegos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;