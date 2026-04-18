'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

// Default Spline scene for testing (a generic 3D cube/shape)
export function HeroSplineScene() {
  return (
    <div className="w-full h-full relative">
       <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  );
}
