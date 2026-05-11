import React, { Suspense, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export const HeroBackground = () => {
  useEffect(() => {
    // Attempt to hide the Spline watermark inside the Shadow DOM
    const hideSplineBranding = () => {
      const splineViewers = document.querySelectorAll('spline-viewer');
      splineViewers.forEach(viewer => {
        if (viewer.shadowRoot) {
          const watermark = viewer.shadowRoot.querySelector('#spline-watermark');
          if (watermark) {
            watermark.style.display = 'none';
            watermark.style.opacity = '0';
            watermark.style.pointerEvents = 'none';
            watermark.style.visibility = 'hidden';
          }
        }
      });
    };

    // Run multiple times to catch it when it loads
    const interval = setInterval(hideSplineBranding, 500);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="hero-background-spline" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      touchAction: 'none'
    }}>
      <Suspense fallback={<div className="spline-loading" style={{ width: '100%', height: '100%', background: '#000' }} />}>
        <Spline
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'auto',
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      
      {/* Overlay gradient to ensure text readability */}
      <div
        className="hero-spline-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
