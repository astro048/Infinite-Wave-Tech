import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { industriesData } from '../../data/industries';
import '../../styles/Logistics.css';
import Contact from '../../components/Contact';

const Logistics: React.FC = () => {
  const data = industriesData['logistics'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="logistics-page">
      <DynamicPageLayout data={data} />
      <Contact/>
    </div>
  );
};

export default Logistics;
