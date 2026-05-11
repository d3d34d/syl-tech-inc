import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export const HeroBackground = () => {
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
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'calc(100% + 150px)',
          height: 'calc(100% + 80px)',
        }}>
          <Spline
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'auto',
            }}
            scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
          />
        </div>
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
