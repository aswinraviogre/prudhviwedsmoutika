import React from 'react';

export function SectionDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-primary-foreground">
      <span className="h-px w-16 bg-gold-soft" />
      <span className="text-gold text-lg">❀</span>
      <span className="h-px w-16 bg-gold-soft" />
    </div>
  );
}

export function FloralCornerDecorations() {
  return (
    <>
      <span className="pointer-events-none absolute top-6 left-4 text-4xl opacity-20">🌿</span>
      <span className="pointer-events-none absolute top-12 right-6 text-3xl opacity-20">🌸</span>
      <span className="pointer-events-none absolute bottom-10 left-10 text-3xl opacity-20">🌼</span>
      <span className="pointer-events-none absolute bottom-6 right-4 text-4xl opacity-20">🌿</span>
    </>
  );
}

