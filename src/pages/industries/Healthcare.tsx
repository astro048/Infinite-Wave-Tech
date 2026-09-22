import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { industriesData } from '../../data/industries';
import '../../styles/Healthcare.css';

const Healthcare: React.FC = () => {
  const data = industriesData['healthcare'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="healthcare-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default Healthcare;
