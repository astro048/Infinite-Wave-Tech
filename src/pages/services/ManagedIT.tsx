import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/ManagedIT.css';
import Contact from '../../components/Contact';

const ManagedIT: React.FC = () => {
  const data = servicePagesData['managed-it'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="managed-it-page">
      <DynamicPageLayout data={data} />
      <Contact/>
    </div>
  );
};

export default ManagedIT;
