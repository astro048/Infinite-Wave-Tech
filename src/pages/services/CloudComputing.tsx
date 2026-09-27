import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/CloudComputing.css';
import Contact from '../../components/Contact';

const CloudComputing: React.FC = () => {
  const data = servicePagesData['cloud-computing'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="cloud-computing-page">
      <DynamicPageLayout data={data} />
      <Contact/>
    </div>
  );
};

export default CloudComputing;
