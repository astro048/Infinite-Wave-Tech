import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { industriesData } from '../../data/industries';
import '../../styles/Healthcare.css';
import Contact from '../../components/Contact';

const Healthcare: React.FC = () => {
  const data = industriesData['healthcare'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="healthcare-page">
      <DynamicPageLayout data={data} />
      <Contact />
    </div>
  );
};

export default Healthcare;
