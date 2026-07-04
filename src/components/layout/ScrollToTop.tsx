import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll to the top on every route change, so navigating to a new page
// (e.g. opening a calculator) always starts at the hero instead of keeping the
// previous scroll position. Pages that link to an in-page anchor (#section) are
// left alone so their own anchor-scroll can run.
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};
