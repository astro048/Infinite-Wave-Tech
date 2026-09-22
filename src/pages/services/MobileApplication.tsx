import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/MobileApplication.css';

const MobileApplication: React.FC = () => {
  const data = servicePagesData['mobile-application'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="mobile-application-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default MobileApplication;
