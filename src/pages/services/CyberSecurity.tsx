import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/CyberSecurity.css';

const CyberSecurity: React.FC = () => {
  const data = servicePagesData['cyber-security'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="cyber-security-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default CyberSecurity;
