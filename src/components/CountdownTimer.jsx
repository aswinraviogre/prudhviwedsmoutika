import React, { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData';

const TARGET_TIME = new Date(invitationData.ceremony.targetIsoDate).getTime();

const calculateTimeLeft = () => {
  const diff = Math.max(0, TARGET_TIME - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center min-w-[68px] sm:min-w-[90px]">
          <div className="w-full aspect-square rounded-2xl bg-cream border border-gold-soft shadow-soft flex items-center justify-center backdrop-blur-sm">
            <span className="font-cinzel text-2xl sm:text-4xl text-rose-deep tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-xs sm:text-sm tracking-widest uppercase text-sage-deep">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

