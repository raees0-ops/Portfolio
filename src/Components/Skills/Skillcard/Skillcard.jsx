import React from 'react'
import './Skillcard.css'

const Skillcard = ({ title, iconUrl, isActive, onClick }) => {
    return (
      <div
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <img  className= "skill-icon"src={iconUrl} alt={title} />
        <span>{title}</span>
      </div>
    );
  };

export default Skillcard