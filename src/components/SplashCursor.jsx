import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import './SplashCursor.css';

const SPLASH_THROTTLE_MS = 50; // Create a splash at most every 50ms
const SPLASH_ANIMATION_DURATION = 500; // Must match the CSS animation duration

const SplashCursor = () => {
  const { x, y } = useMousePosition();
  const [splashes, setSplashes] = useState([]);
  const lastSplashTimeRef = useRef(0);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      // Restore default cursor on component unmount
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    // Don't create a splash on initial load
    if (x === 0 && y === 0) return;

    const now = Date.now();
    if (now - lastSplashTimeRef.current < SPLASH_THROTTLE_MS) return;
    lastSplashTimeRef.current = now;

    const newSplash = {
      id: Date.now(),
      x,
      y,
    };

    setSplashes((prevSplashes) => [...prevSplashes, newSplash]);

    // Clean up old splashes
    const timer = setTimeout(() => {
      setSplashes((prev) => prev.slice(1));
    }, SPLASH_ANIMATION_DURATION); // Corresponds to the animation duration

    return () => clearTimeout(timer);
  }, [x, y]);

  return (
    <>
      <div className="cursor-dot" style={{ left: `${x}px`, top: `${y}px` }} />
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="splash"
          style={{
            left: `${splash.x}px`,
            top: `${splash.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default SplashCursor;
