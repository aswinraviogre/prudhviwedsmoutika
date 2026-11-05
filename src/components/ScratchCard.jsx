import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { invitationData } from '../data/invitationData';

export default function ScratchCard({ revealed, onRevealed }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || revealed) return;

    const initCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.scale(dpr, dpr);
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, '#d4a574');
      gradient.addColorStop(0.5, '#f5d199');
      gradient.addColorStop(1, '#b8853f');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
      ctx.shadowBlur = 1;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 1;
      ctx.fillStyle = '#5c3b12';
      ctx.font = '700 15px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✦  SCRATCH TO REVEAL  ✦', rect.width / 2, rect.height / 2);
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [revealed]);

  const fireConfetti = () => {
    const burst = (origin) =>
      confetti({
        particleCount: 120,
        spread: 90,
        startVelocity: 45,
        origin,
        colors: ['#d4a574', '#f5d199', '#c75a6b', '#7a8a6a', '#fff'],
        scalar: 1.1,
      });

    burst({ x: 0.2, y: 0.4 });
    burst({ x: 0.5, y: 0.3 });
    burst({ x: 0.8, y: 0.4 });
    setTimeout(() => burst({ x: 0.5, y: 0.5 }), 250);
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height).data;
    let transparentCount = 0;

    // Sample every 160th pixel alpha channel
    for (let i = 3; i < imageData.length; i += 160) {
      if (imageData[i] < 60) transparentCount++;
    }

    const totalSamples = imageData.length / 160;
    if (transparentCount / totalSamples > 0.45) {
      ctx.clearRect(0, 0, width, height);
      fireConfetti();
      onRevealed();
    }
  };

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 28, 0, Math.PI * 2);
    ctx.fill();
  };

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (isDrawing.current) {
      e.preventDefault();
      scratch(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
    checkScratchPercentage();
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-md h-32 rounded-2xl overflow-hidden border-2 border-gold-soft shadow-elegant select-none"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream">
        <p className="font-cinzel tracking-[0.35em] text-sage-deep text-base">
          SAVE THE DATE
        </p>
        <p className="font-script text-4xl text-rose-deep mt-1">
          {invitationData.ceremony.dateText}
        </p>
      </div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
        />
      )}
    </div>
  );
}
