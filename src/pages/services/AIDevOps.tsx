import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/AIDevOps.css';

const AIDevOps: React.FC = () => {
  const data = servicePagesData['ai-devops'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="ai-devops-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default AIDevOps;
