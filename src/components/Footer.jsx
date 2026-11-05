import React from 'react';
import { invitationData } from '../data/invitationData';

export default function Footer() {
  const { groom, bride, hashtag } = invitationData.couple;
  const { dateText } = invitationData.ceremony;

  return (
    <footer className="bg-foreground text-cream py-16 px-6 text-center text-primary-foreground">
      <p className="font-cinzel text-xs tracking-[0.4em] text-gold-soft">
        WITH LOVE
      </p>
      <h3 className="font-script text-5xl sm:text-6xl text-cream mt-3 text-primary-foreground">
        {groom.name} & {bride.name}
      </h3>
      <div className="my-5 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gold-soft/40" />
        <span className="text-2xl">💐</span>
        <span className="h-px w-12 bg-gold-soft/40" />
      </div>
      <p className="font-serif-display text-lg italic">
        {dateText}
      </p>
      <p className="mt-3 font-cinzel text-xs tracking-widest text-cream/70">
        {hashtag}
      </p>
    </footer>
  );
}

