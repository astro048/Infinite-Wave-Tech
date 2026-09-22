import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/WebApplication.css';

const WebApplication: React.FC = () => {
  const data = servicePagesData['web-application'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="web-application-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default WebApplication;
