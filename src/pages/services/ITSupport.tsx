import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/ITSupport.css';
import Contact from '../../components/Contact';

const ITSupport: React.FC = () => {
  const data = servicePagesData['it-support'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="it-support-page">
      <DynamicPageLayout data={data} />
      <Contact/>
    </div>
  );
};

export default ITSupport;
