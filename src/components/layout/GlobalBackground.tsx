import React, { useEffect, useRef } from 'react';
import './GlobalBackground.css';

export const GlobalBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoSrc = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = videoSrc;
      } else {
        // Use hls.js
        import('hls.js').then((HlsModule) => {
          const Hls = HlsModule.default;
          if (Hls.isSupported()) {
            const hls = new Hls({ enableWorker: false });
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              // Intentionally left blank, autoPlay is handled by the video tag
            });
          }
        });
      }
    }
  }, []);

  return (
    <div className="global-background-layer">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="global-video"
      />
      <div className="global-video-overlay"></div>
      <div className="global-ambient-glow"></div>
      <div className="global-grid-lines"></div>
    </div>
  );
};
