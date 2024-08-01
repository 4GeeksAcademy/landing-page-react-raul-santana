import React from 'react';
const MyCard = () => (
  <div className="col-md-3">
    <div className="card">
      <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfxMxp-UJfY0ynAwlYPzsV2_9MRzqPQDj8g&s" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">El Gigante de Hierro</h5>
        <p className="card-text">
          Esta película la tuve de pequeño en formato VHS y sin duda, para mí, es una de las mejores películas que han hecho de dibujos en toda la historia.
        </p>
        <a href="https://www.youtube.com/watch?v=-O7E21ZWm2E" target="_blank" rel="noopener noreferrer"className="btn">Para saber más</a>
      </div>
    </div>
  </div>
);
export default MyCard;