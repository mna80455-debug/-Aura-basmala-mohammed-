import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    const checkTime = () => {
      if (video.duration) {
        const currentTime = video.currentTime;
        const duration = video.duration;

        // Fade in: first 0.5s (opacity goes from 0 to 1)
        if (currentTime < 0.5) {
          setOpacity(currentTime / 0.5);
        }
        // Fade out: last 0.5s (opacity goes from 1 to 0)
        else if (duration - currentTime < 0.5) {
          setOpacity((duration - currentTime) / 0.5);
        }
        // Middle: fully visible (opacity = 1)
        else {
          setOpacity(1);
        }
      }
      animationFrameId = requestAnimationFrame(checkTime);
    };

    animationFrameId = requestAnimationFrame(checkTime);

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(err => console.log("Video play interrupted:", err));
        }
      }, 100); // Wait 100ms
    };

    video.addEventListener('ended', handleEnded);

    // Attempt autoplay
    video.play().catch(err => console.log("Video autoplay failed (interaction required):", err));

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div 
      className="absolute z-0 overflow-hidden w-full"
      style={{ top: '300px', inset: 'auto 0 0 0', height: 'calc(100% - 300px)' }}
    >
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-100"
        style={{ opacity: opacity }}
      />
      {/* Gradient overlay on video */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  );
}
