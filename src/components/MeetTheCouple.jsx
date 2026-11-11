import React from 'react';
import { invitationData } from '../data/invitationData';
import DecadeOfUs from './DecadeOfUs';

export default function MeetTheCouple() {
  const { bride, groom } = invitationData.couple;
  const { weddingLogo } = invitationData.memories;

  return (
    <section className="relative py-16 sm:py-20 px-3 sm:px-6 bg-cream overflow-hidden">
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
          <div className="flex flex-col items-center bg-cream/60 backdrop-blur-sm border border-gold-soft/60 rounded-3xl p-4 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-500">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-gold-soft/60 shadow-soft mb-6 bg-white group/photo">
              <img
                src={bride.favouriteImage}
                alt={`${bride.name}'s Favourite`}
                className="w-full h-auto object-contain rounded-2xl transition-all duration-500 group-hover/photo:brightness-[0.98]"
                loading="lazy"
              />
            </div>
            <div className="w-full border-t border-gold-soft/40 pt-4 text-center mt-auto">
              <p className="font-serif-display italic text-base sm:text-lg text-sage-deep/90 leading-relaxed px-2">
                {bride.quote}
              </p>
            </div>
          </div>

          {/* Groom's Favourite */}
          <div className="flex flex-col items-center bg-cream/60 backdrop-blur-sm border border-gold-soft/60 rounded-3xl p-4 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-500">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-gold-soft/60 shadow-soft mb-6 bg-white group/photo">
              <img
                src={groom.favouriteImage}
                alt={`${groom.name}'s Favourite`}
                className="w-full h-auto object-contain rounded-2xl transition-all duration-500 group-hover/photo:brightness-[0.98]"
                loading="lazy"
              />
            </div>
            <div className="w-full border-t border-gold-soft/40 pt-4 text-center mt-auto">
              <p className="font-serif-display italic text-base sm:text-lg text-sage-deep/90 leading-relaxed px-2">
                {groom.quote}
              </p>
            </div>
          </div>
        </div>

        {/* Memory: Our Wedding Logo */}
        <div className="mb-24 bg-cream/70 backdrop-blur-sm border border-gold-soft/50 rounded-3xl p-6 sm:p-10 shadow-elegant">
          <div className="text-center mb-8">
            <h3 className="font-script text-4xl sm:text-5xl text-rose-deep">
              {weddingLogo.title}
            </h3>
            <p className="font-cinzel text-[10px] sm:text-xs text-sage-deep tracking-widest mt-1 uppercase">
              {weddingLogo.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-soft/60 shadow-elegant max-w-sm sm:max-w-md w-full group bg-white p-2 sm:p-3">
              <img
                src={weddingLogo.image}
                alt="Mouktika & Prudhvi Sai Wedding Logo #MouVi"
                className="w-full h-auto object-contain rounded-2xl transition-all duration-500 group-hover:brightness-[0.98]"
                loading="lazy"
              />
            </div>
            <div className="text-center mt-6">
              <p className="font-script text-3xl sm:text-4xl text-rose-deep">
                {weddingLogo.caption}
              </p>
              <p className="font-cinzel text-xs text-gold-deep tracking-widest mt-1.5 font-semibold">
                {weddingLogo.hashtag}
              </p>
            </div>
          </div>
        </div>

        {/* A Decade of Us - 10 Couple Photos Showcase */}
        <DecadeOfUs />
      </div>
    </section>
  );
}
