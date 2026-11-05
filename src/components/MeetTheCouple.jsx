import React from 'react';
import { invitationData } from '../data/invitationData';

export default function MeetTheCouple() {
  const { bride, groom } = invitationData.couple;
  const { valentine, firstPhoto } = invitationData.memories;

  return (
    <section className="relative py-20 px-6 bg-cream overflow-hidden">
      {/* Decorative corner florals */}
      <span className="pointer-events-none absolute top-12 left-4 text-4xl opacity-15">🌸</span>
      <span className="pointer-events-none absolute top-40 right-10 text-3xl opacity-15">🌿</span>
      <span className="pointer-events-none absolute bottom-12 left-10 text-3xl opacity-15">🌼</span>
      <span className="pointer-events-none absolute bottom-40 right-6 text-4xl opacity-15">🌸</span>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs text-sage-deep tracking-widest">
            THE PERFECT MATCH
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-rose-deep mt-2">
            Meet the Couple
          </h2>
          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-soft" />
            <span className="text-gold text-lg">❀</span>
            <span className="h-px w-16 bg-gold-soft" />
          </div>
        </div>

        {/* Couple Favourites Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-24">
          {/* Bride's Favourite */}
          <div className="flex flex-col items-center bg-cream/60 backdrop-blur-sm border border-gold-soft/60 rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elegant transition-all duration-500">
            <h3 className="font-script text-4xl text-rose-deep mb-6">
              {bride.name}'s Favourite
            </h3>
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-gold-soft shadow-soft mb-6 bg-white aspect-[3/4] group/photo">
              <img
                src={bride.favouriteImage}
                alt={`${bride.name}'s portrait`}
                className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold-soft/40 rounded-2xl pointer-events-none" />
            </div>
            <div className="w-full border-t border-gold-soft/40 pt-6 text-center mt-auto">
              <p className="font-serif-display italic text-base sm:text-lg text-sage-deep/90 leading-relaxed px-2">
                {bride.quote}
              </p>
            </div>
          </div>

          {/* Groom's Favourite */}
          <div className="flex flex-col items-center bg-cream/60 backdrop-blur-sm border border-gold-soft/60 rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elegant transition-all duration-500">
            <h3 className="font-script text-4xl text-rose-deep mb-6">
              {groom.name}'s Favourite
            </h3>
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-gold-soft shadow-soft mb-6 bg-white aspect-[3/4] group/photo">
              <img
                src={groom.favouriteImage}
                alt={`${groom.name}'s portrait`}
                className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold-soft/40 rounded-2xl pointer-events-none" />
            </div>
            <div className="flex flex-col items-center justify-center bg-[#fdf2f8] border border-gold-soft/40 rounded-2xl p-6 w-full shadow-soft text-center mb-6 min-h-[128px]">
              <div className="font-cinzel text-[10px] text-rose/70 tracking-[0.2em] mb-1">
                ULTIMATE FAVOURITE
              </div>
              <h4 className="font-script text-4xl sm:text-5xl text-rose-deep tracking-wider flex items-center gap-2 justify-center">
                {groom.ultimateFavourite}{" "}
                <span className="text-rose animate-pulse">♥</span>
              </h4>
              <p className="font-serif-display italic text-rose-deep/70 text-sm mt-2">
                That's it. That's the favourite!
              </p>
            </div>
            <div className="w-full border-t border-gold-soft/40 pt-6 text-center mt-auto">
              <p className="font-serif-display italic text-base sm:text-lg text-sage-deep/90 leading-relaxed px-2">
                {groom.quote}
              </p>
            </div>
          </div>
        </div>

        {/* Memory: Our First Valentine */}
        <div className="mb-24 bg-cream/70 backdrop-blur-sm border border-gold-soft/50 rounded-3xl p-6 sm:p-10 shadow-elegant">
          <div className="text-center mb-10">
            <h3 className="font-script text-4xl sm:text-5xl text-rose-deep">
              {valentine.title}
            </h3>
            <p className="font-cinzel text-[10px] sm:text-xs text-sage-deep tracking-widest mt-1">
              {valentine.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-gold-soft/50 shadow-soft max-w-md w-full group">
              <img
                src={valentine.image}
                alt="Valentine Bouquet and Note"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Memory: Our First Photo Polaroid */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h3 className="font-script text-4xl sm:text-5xl text-rose-deep">
              {firstPhoto.title}
            </h3>
            <p className="font-cinzel text-[10px] sm:text-xs text-sage-deep tracking-widest mt-1">
              {firstPhoto.subtitle}
            </p>
          </div>
          <div className="bg-[#fafafa] border border-gold-soft p-4 sm:p-5 pb-8 sm:pb-10 rounded-sm shadow-elegant max-w-sm w-full -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 relative group border-b-[8px] border-b-gold-soft/30">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
            <div className="aspect-[9/16] overflow-hidden bg-zinc-100 rounded-sm border border-zinc-200 shadow-inner mb-4 sm:mb-5">
              <img
                src={firstPhoto.image}
                alt="Our first photo together"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="text-center pt-2">
              <p className="font-script text-3xl sm:text-4xl text-rose-deep leading-none select-none">
                {firstPhoto.caption}
              </p>
              <p className="font-cinzel text-[9px] tracking-widest text-sage-deep mt-2 select-none">
                {firstPhoto.tag}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
