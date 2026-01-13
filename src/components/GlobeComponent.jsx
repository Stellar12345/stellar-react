import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef();
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !globeEl.current) return;

    const controls = globeEl.current.controls();
    if (controls) {
      controls.autoRotate = false; // Disable auto-rotate for manual control
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.enableZoom = false; // Disable zoom
      controls.enablePan = false; // Disable pan
      controls.enableRotate = true; // Enable manual rotation only
      // Lock distance to prevent zoom
      controls.minDistance = 450;
      controls.maxDistance = 450;
      
      // Override zoom to always maintain fixed distance
      const originalUpdate = controls.update;
      controls.update = function() {
        const result = originalUpdate.call(this);
        if (this.object) {
          // Force camera to maintain fixed distance
          const distance = this.object.position.length();
          if (Math.abs(distance - 450) > 1) {
            this.object.position.normalize().multiplyScalar(450);
          }
        }
        return result;
      };
    }

    const camera = globeEl.current.camera();
    if (camera) {
      camera.position.z = 450; // Fixed distance
      camera.updateProjectionMatrix();
    }
  }, [isMounted]);

  // Prevent wheel/scroll zoom on the container - must be before conditional return
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('DOMMouseScroll', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('DOMMouseScroll', handleWheel);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const arcsData = [
    { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: '#059669' },
    { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503, color: '#2563eb' },
    { startLat: 35.6762, startLng: 139.6503, endLat: 25.2048, endLng: 55.2708, color: '#047857' },
    { startLat: 25.2048, startLng: 55.2708, endLat: 40.7128, endLng: -74.006, color: '#1e40af' },
  ];

  const points = [
    { lat: 40.7128, lng: -74.006, size: 10, color: '#2563eb' },
    { lat: 51.5074, lng: -0.1278, size: 10, color: '#059669' },
    { lat: 35.6762, lng: 139.6503, size: 10, color: '#2563eb' },
    { lat: 25.2048, lng: 55.2708, size: 12, color: '#047857' },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      onWheel={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      style={{ touchAction: 'pan-y', overflow: 'hidden' }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        atmosphereColor="#3b82f6"
        atmosphereAltitude={0.12}

        arcsData={arcsData}
        arcColor={(d) => d.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={2.2}
        arcAltitudeAutoScale={0.5}

        pointsData={points}
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.01}

        ringsData={points.map((p) => ({
          lat: p.lat,
          lng: p.lng,
          maxRadius: 25,
          propagationSpeed: 2,
          repeatPeriod: 1200,
        }))}
        ringColor={(d, i) => points[i]?.color}
        ringMaxRadius="maxRadius"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"

        enablePointerInteraction={true}
      />
    </div>
  );
};

export default GlobeComponent;
