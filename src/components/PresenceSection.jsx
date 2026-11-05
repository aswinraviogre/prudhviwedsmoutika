import React from 'react';
import { SectionDivider, FloralCornerDecorations } from './FloralDecorations';

export default function PresenceSection() {
  return (
    <section className="relative py-24 px-6 bg-cream text-center">
      <FloralCornerDecorations />
      <div className="relative max-w-2xl mx-auto">
        <h2 className="font-script text-5xl sm:text-6xl text-rose-deep">
          Awaiting Your Noble Presence
        </h2>
        <SectionDivider />
        <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed">
          Because meeting two souls requires twice the fun — and you!
        </p>
      </div>
    </section>
  );
}

