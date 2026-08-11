import React, { useEffect, useRef } from 'react';
import './GlobalBackground.css';

import Hls from 'hls.js';

export const GlobalBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted for autoplay policies
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    const videoSrc = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';
    let hls: Hls | null = null;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Auto-play prevented, checking again', error);
          // Sometimes browsers need a tiny delay or it just needs to be retried
          setTimeout(() => {
            if (video.paused) {
              video.play().catch(e => console.error("Autoplay retry failed:", e));
            }
          }, 1000);
        });
      }
    };

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', playVideo);
    } else {
      // Use hls.js with fallback to window.Hls if needed
      const HlsClass = Hls || (window as any).Hls;
      if (HlsClass && HlsClass.isSupported()) {
        hls = new HlsClass({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        
        hls.on(HlsClass.Events.MANIFEST_PARSED, () => {
          playVideo();
        });
        
        hls.on(HlsClass.Events.ERROR, (event: any, data: any) => {
          if (data.fatal) {
            switch (data.type) {
              case HlsClass.ErrorTypes.NETWORK_ERROR:
                console.log("fatal network error encountered, try to recover");
                hls?.startLoad();
                break;
              case HlsClass.ErrorTypes.MEDIA_ERROR:
                console.log("fatal media error encountered, try to recover");
                hls?.recoverMediaError();
                break;
              default:
                // cannot recover
                hls?.destroy();
                break;
            }
          }
        });
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
      video.removeEventListener('loadedmetadata', playVideo);
    };
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
    </div>
  );
};
