import { useEffect } from 'react';

/**
 * Fixed aurora blobs + grid + a spotlight that follows the pointer.
 */
export default function BackgroundFX() {
  useEffect(() => {
    const onMove = (e) => {
      const root = document.documentElement;
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="grid" />
   
      </div>
      <div className="spotlight" aria-hidden="true" />
    </>
  );
}
