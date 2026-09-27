import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/AIDevOps.css';
import Contact from '../../components/Contact';

const AIDevOps: React.FC = () => {
  const data = servicePagesData['ai-devops'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="ai-devops-page">
      <DynamicPageLayout data={data} />
      <Contact />
    </div>
  );
};

export default AIDevOps;
