import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { industriesData } from '../../data/industries';
import '../../styles/Manufacturing.css';
import Contact from '../../components/Contact';

const Manufacturing: React.FC = () => {
  const data = industriesData['manufacturing'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="manufacturing-page">
      <DynamicPageLayout data={data} />
      <Contact />
    </div>
  );
};

export default Manufacturing;
