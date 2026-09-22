import React from 'react';
import DynamicPageLayout from '../../components/dynamic/DynamicPageLayout';
import { servicePagesData } from '../../data/servicePages';
import '../../styles/CustomSoftware.css';

const CustomSoftware: React.FC = () => {
  const data = servicePagesData['custom-software'];
  if (!data) return <div>Page not found</div>;

  return (
    <div className="custom-software-page">
      <DynamicPageLayout data={data} />
    </div>
  );
};

export default CustomSoftware;
