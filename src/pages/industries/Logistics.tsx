import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { industriesData } from '../../data/industries';
import '../../styles/Logistics.css';

const Logistics: React.FC = () => {
  const data = industriesData['logistics'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="logistics-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default Logistics;
