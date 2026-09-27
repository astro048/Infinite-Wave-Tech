import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/ITConsultancy.css';
import Contact from '../../components/Contact';

const ITConsultancy: React.FC = () => {
  const data = servicePagesData['it-consultancy'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="it-consultancy-page">
      <DynamicPageLayout data={data} />
      <Contact/>
    </div>
  );
};

export default ITConsultancy;
