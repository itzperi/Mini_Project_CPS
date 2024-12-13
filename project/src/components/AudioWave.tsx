import { useEffect, useRef } from 'react';

export function AudioWave({ isPlaying }: { isPlaying: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const bars = 50;
    const barWidth = canvas.width / bars;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bars; i++) {
        const height = isPlaying ? 
          Math.random() * canvas.height * 0.8 : 
          canvas.height * 0.2;
        
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue('--wave-color').trim();
        
        ctx.fillRect(
          i * barWidth,
          (canvas.height - height) / 2,
          barWidth - 2,
          height
        );
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  return (
    <canvas 
      ref={canvasRef} 
      width={200} 
      height={60} 
      className="w-full h-16"
    />
  );
}