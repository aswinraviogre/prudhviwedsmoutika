import React from 'react';
import { invitationData } from '../data/invitationData';
import { SectionDivider, FloralCornerDecorations } from './FloralDecorations';

export default function EventsSchedule() {
  const { events } = invitationData;

  return (
    <section className="relative py-20 px-6 bg-sage-soft bg-secondary">
      <FloralCornerDecorations />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs text-sage-deep tracking-widest uppercase">
            CELEBRATIONS & SACRED RITUALS
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-rose-deep mt-2">
            Events Schedule
          </h2>
          <SectionDivider />
          <p className="font-serif-display italic text-lg text-sage-deep/90 max-w-xl mx-auto">
            Join us by the serene backwaters of Kerala and in the city of destiny as we celebrate our new beginnings
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event) => {
            const isMainWedding = event.id === "wedding";

            return (
              <article
                key={event.id}
                className={`relative rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group isolate border ${
                  isMainWedding
                    ? "border-gold ring-2 ring-gold/40 shadow-gold bg-cream"
                    : "border-gold-soft/80 bg-cream/90"
                }`}
              >
                {/* Thematic event photo background with luminous cream overlay */}
                {event.bgImage && (
                  <>
                    <img
                      src={event.bgImage}
                      alt={`${event.title} backdrop`}
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-cream/45 via-cream/65 to-cream/85 backdrop-blur-[1px]"
                      aria-hidden="true"
                    />
                  </>
                )}

                {/* Event content */}
                <div className="relative p-6 sm:p-10 text-foreground">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="font-cinzel text-[11px] tracking-widest px-3.5 py-1.5 rounded-full bg-cream/90 backdrop-blur-md text-gold-deep border border-gold/50 font-semibold shadow-xs">
                      {event.badge}
                    </span>
                    <span className="text-2xl filter drop-shadow-xs" aria-hidden="true">
                      {event.icon}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="text-center sm:text-left mb-6">
                    <h3 className="font-script text-4xl sm:text-5xl text-rose-deep font-normal leading-tight drop-shadow-xs">
                      {event.title}
                    </h3>
                    <p className="mt-2 italic text-sm sm:text-base text-[#1b3b22] font-semibold">
                      {event.description}
                    </p>

                    <div className="my-4 flex items-center gap-3 justify-center sm:justify-start">
                      <span className="h-px w-12 bg-gold-soft" />
                      <span className="text-gold">❀</span>
                      <span className="h-px w-12 bg-gold-soft" />
                    </div>
                  </div>

                  {/* 4 Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date & Day */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gold-soft/60 shadow-xs hover:border-gold-soft transition-colors">
                      <div className="font-cinzel text-xs text-sage-deep font-semibold tracking-wider uppercase">
                        DATE & DAY
                      </div>
                      <div className="font-serif-display text-lg text-foreground font-semibold mt-1">
                        {event.day} · {event.dateFormatted}
                      </div>
                    </div>

                    {/* Time */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gold-soft/60 shadow-xs hover:border-gold-soft transition-colors">
                      <div className="font-cinzel text-xs text-sage-deep font-semibold tracking-wider uppercase">
                        TIME
                      </div>
                      <div className="font-serif-display text-lg text-foreground font-semibold mt-1">
                        {event.time}
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gold-soft/60 shadow-xs hover:border-gold-soft transition-colors">
                      <div className="font-cinzel text-xs text-sage-deep font-semibold tracking-wider uppercase">
                        VENUE
                      </div>
                      <div className="font-serif-display text-base text-foreground font-semibold mt-1">
                        {event.venue}
                      </div>
                    </div>

                    {/* Attire / Dress Code */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gold-soft/60 shadow-xs hover:border-gold-soft transition-colors">
                      <div className="font-cinzel text-xs text-sage-deep font-semibold tracking-wider uppercase">
                        ATTIRE / DRESS CODE
                      </div>
                      <div className="font-serif-display text-base text-foreground font-semibold mt-1">
                        {event.dressCode}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
