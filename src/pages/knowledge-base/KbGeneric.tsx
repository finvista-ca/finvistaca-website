import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResourceLayout } from '../../components/layout/ResourceLayout';
import { kbResourceContent } from '../../data/kbResourceContent';
import { knowledgeBaseData } from '../../data/knowledgeBaseData';

// Look up an external URL for a slug (Important Links etc. redirect straight out).
function findExternalUrl(slug: string): string | undefined {
  for (const column of knowledgeBaseData) {
    for (const category of column.categories) {
      const item = category.items.find((i) => i.slug === slug);
      if (item?.externalUrl) return item.externalUrl;
    }
  }
  return undefined;
}

// Data-driven Knowledge Base page. Reads the :slug route param and renders
// the matching reference table. If the slug is a pure external link (e.g. an
// Important Link opened via an old URL), it redirects straight to the source.
export const KbGeneric: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const externalUrl = slug ? findExternalUrl(slug) : undefined;

  useEffect(() => {
    if (externalUrl) {
      window.location.replace(externalUrl);
    }
  }, [externalUrl]);

  if (externalUrl) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '50vh' }}>
        <p>Redirecting you to the official website…</p>
        <p>
          If you are not redirected,{' '}
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">click here</a>.
        </p>
      </div>
    );
  }

  const content = slug ? kbResourceContent[slug] : undefined;

  if (!content) {
    return (
      <div style={{ paddingTop: '100px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Page Not Found</h2>
        <p>The requested resource ({slug}) could not be found.</p>
      </div>
    );
  }

  return (
    <ResourceLayout
      title={content.title}
      description={content.description}
      data={content.data}
      type={content.type}
    />
  );
};
