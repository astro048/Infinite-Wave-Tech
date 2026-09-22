import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/ManagedIT.css';

const ManagedIT: React.FC = () => {
  const data = servicePagesData['managed-it'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="managed-it-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default ManagedIT;
