import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { pageMappings } from '../pageMappings';

export const ResourcePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  if (!slug) return <Navigate replace to="/knowledge-base" />;

  let Component: React.FC | undefined = undefined;

  if (location.pathname.startsWith('/gst/')) {
    Component = pageMappings.gst[slug];
  } else if (location.pathname.startsWith('/knowledge-base/')) {
    Component = pageMappings.knowledgeBase[slug];
  } else if (location.pathname.startsWith('/calculator/')) {
    Component = pageMappings.calculator[slug];
  }

  if (!Component) {
    return (
      <div style={{ paddingTop: '100px', textAlign: 'center', height: '100vh' }}>
        <h2>Page Not Found</h2>
        <p>The requested page ({slug}) could not be found.</p>
      </div>
    );
  }

  return <Component />;
};
