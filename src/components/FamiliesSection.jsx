import React from 'react';
import { invitationData } from '../data/invitationData';
import { SectionDivider, FloralCornerDecorations } from './FloralDecorations';

export default function FamiliesSection() {
  const { families } = invitationData;

  return (
    <section className="relative py-20 px-6 bg-sage-soft bg-secondary">
      <FloralCornerDecorations />
      <div className="relative max-w-5xl mx-auto text-center">
        <p className="font-cinzel text-xs text-sage-deep tracking-widest">
          WITH LOVE & BLESSINGS
        </p>
        <h2 className="font-script text-5xl sm:text-6xl text-rose-deep mt-2">
          The Families
        </h2>
        <SectionDivider />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {families.groups.map((group) => (
            <div
              key={group.side}
              className="bg-cream/85 backdrop-blur-sm border border-gold-soft rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <p className="font-cinzel text-xs text-sage-deep tracking-widest uppercase">
                {group.side}
              </p>
              <div className="my-4 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-gold-soft" />
                <span className="text-gold">❀</span>
                <span className="h-px w-8 bg-gold-soft" />
              </div>
              <p className="font-serif-display text-2xl sm:text-3xl text-foreground font-semibold my-2">
                {group.parents}
              </p>
              <p className="font-serif-display italic text-sm sm:text-base text-sage-deep mt-3">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
