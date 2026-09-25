import React from 'react';
import '../Styles/CapitalMarkets.css';

interface SectorCardProps {
  imageSrc: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SectorCard: React.FC<SectorCardProps> = ({
  imageSrc,
  title,
  description,
  icon,
}) => {
  return (
    <div className="cm-sector-card">
      <img src={imageSrc} alt={title} className="cm-sector-bg-img" />
      <div className="cm-sector-overlay"></div>
      <div className="cm-sector-icon-floating">{icon}</div>
      <div className="cm-sector-card-content">
        <h3 className="cm-sector-card-title">{title}</h3>
        <p className="cm-sector-card-desc">{description}</p>
      </div>
    </div>
  );
};

export default SectorCard;
