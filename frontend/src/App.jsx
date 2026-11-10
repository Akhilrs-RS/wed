import React, { useState, useEffect } from 'react';
// import MainWeddingApp from './pages/MainWeddingApp';
import ReceptionApp from './pages/ReceptionApp';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Grand Gala Reception page rendered directly on initial load
  return <ReceptionApp navigate={navigate} />;

  /*
  // PREVIOUS MULTI-PAGE ROUTER (Commented out - can be re-enabled anytime)
  const isReception = currentPath.toLowerCase().startsWith('/reception');

  if (isReception) {
    return <ReceptionApp navigate={navigate} />;
  }

  return <MainWeddingApp navigate={navigate} />;
  */
}
