'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

const Main = () => {
  const rot = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    let gsap;
    import('gsap').then((module) => {
      gsap = module.default;

      if (!rot.current || !body.current) return;

      // Continuous rotation
      gsap.to(rot.current, {
        rotateZ: 360,
        repeat: -1,
        duration: 1.5,
        ease: 'linear',
      });

      // Slide in from right
      gsap.from(rot.current, {
        x: 400,
        duration: 2,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Drop circle
      gsap.from(body.current, {
        y: 200,
        duration: 1.5,
        ease: 'bounce.out',
      });
    });
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="relative w-full max-w-4xl h-[100px] overflow-hidden bg-gray-900 rounded-2xl text-white flex justify-center items-center gap-12 px-6">
        {/* Animated Circle */}
        <div
          ref={body}
          className="absolute left-2.5 border border-amber-500 h-8 w-8 p-1 rounded-full flex justify-center items-center"
        >
          <div ref={rot} className="h-5 w-1 bg-lime-300"></div>
        </div>

        {/* Navigation Links */}
        <Link
          className="text-3xl font-mono text-lime-500 hover:text-lime-400 transition-colors"
          href="/k"
        >
          Projects
        </Link>
        <Link
          className="text-3xl font-mono text-lime-500 hover:text-lime-400 transition-colors"
          href="/profile"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Main;
