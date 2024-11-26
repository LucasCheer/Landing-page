import React from 'react';
import '../styles/components/CardTeam.scss';

const CardTeam = ({name, position, description}) => {
  return (
    <div className="card-team">
      <div className="card__image">
        {/* Add your image here */}
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__subtitle">{position}</p>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__social">
        {/* Add your social media icons here */}
        <a href="#" className="card__social-link">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default CardTeam;