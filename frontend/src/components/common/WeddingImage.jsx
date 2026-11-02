import React, { useState } from 'react';

/**
 * Resilient WeddingImage component ensuring no image is ever empty or broken.
 * Displays golden shimmer while loading and falls back to a graceful placeholder on error.
 */
export default function WeddingImage({
  src,
  alt = 'Wedding celebration',
  className = '',
  fallbackSrc = '/images/bd.jpg',
  aspectRatio = 'auto',
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imageSrc = error ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton Shimmer */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-gold-100/40 to-stone-100 animate-pulse z-10" />
      )}

      {/* Image Element */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!error) {
            setError(true);
            setLoaded(true);
          }
        }}
        {...props}
      />
    </div>
  );
}

