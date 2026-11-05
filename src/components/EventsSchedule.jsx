import React from 'react';
import { invitationData } from '../data/invitationData';
import { SectionDivider, FloralCornerDecorations } from './FloralDecorations';

export default function EventsSchedule() {
  const { events, ceremony } = invitationData;

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

        <div className="max-w-4xl mx-auto space-y-10">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const isMainWedding = event.id === "wedding";

            return (
              <article
                key={event.id}
                className={`relative rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group isolate border ${
                  isMainWedding
                    ? "border-gold ring-2 ring-gold/40 shadow-gold"
                    : "border-gold-soft/80"
                } bg-cream`}
              >
                {/* Background image & dark overlay for highlight events */}
                {(event.bgImage || ceremony.bgImage) && (
                  <>
                    <img
                      src={event.bgImage || ceremony.bgImage}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isMainWedding
                          ? "bg-black/65 bg-gradient-to-r from-black/85 via-black/65 to-black/85"
                          : "bg-black/60 bg-gradient-to-t from-black/80 via-black/55 to-black/75"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}

                {/* Event content */}
                <div className="relative p-6 sm:p-10 text-white">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="font-cinzel text-[11px] tracking-widest px-3 py-1 rounded-full bg-gold/30 text-gold-soft border border-gold/40">
                      {event.badge}
                    </span>
                    <span className="text-2xl">{event.icon}</span>
                  </div>

                  <div className="grid gap-6 items-center grid-cols-1 sm:grid-cols-12">
                    {/* Illustration (only on main wedding or large events) */}
                    <div
                      className={`sm:col-span-4 flex justify-center items-center ${
                        isEven ? "sm:order-1" : "sm:order-2"
                      }`}
                    >
                      <img
                        src={ceremony.coupleIllustration}
                        alt={`${event.title} illustration`}
                        loading="lazy"
                        className="w-full max-w-[180px] sm:max-w-[200px] h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div
                      className={`sm:col-span-8 flex flex-col justify-center text-center sm:text-left ${
                        isEven ? "sm:order-2" : "sm:order-1"
                      }`}
                    >
                      <h3 className="font-script text-4xl sm:text-5xl text-cream font-normal leading-tight text-slate-50">
                        {event.title}
                      </h3>
                      <p className="mt-2 italic text-sm sm:text-base text-cream/90 text-slate-200">
                        {event.description}
                      </p>

                      <div className="my-4 flex items-center gap-3 justify-center sm:justify-start">
                        <span className="h-px w-10 bg-gold-soft/60" />
                        <span className="text-gold">❀</span>
                        <span className="h-px w-10 bg-gold-soft/60" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                        {/* Date & Day */}
                        <div className="bg-black/25 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <div className="font-cinzel text-xs text-gold-soft">
                            DATE & DAY
                          </div>
                          <div className="font-serif-display text-lg text-cream font-semibold mt-0.5">
                            {event.day} · {event.dateFormatted}
                          </div>
                        </div>

                        {/* Time */}
                        <div className="bg-black/25 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <div className="font-cinzel text-xs text-gold-soft">
                            TIME
                          </div>
                          <div className="font-serif-display text-lg text-cream font-semibold mt-0.5">
                            {event.time}
                          </div>
                        </div>

                        {/* Venue */}
                        <div className="bg-black/25 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <div className="font-cinzel text-xs text-gold-soft">
                            VENUE
                          </div>
                          <div className="font-serif-display text-base text-cream font-semibold mt-0.5">
                            {event.venue}
                          </div>
                        </div>

                        {/* Dress Code */}
                        <div className="bg-black/25 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <div className="font-cinzel text-xs text-gold-soft">
                            ATTIRE / DRESS CODE
                          </div>
                          <div className="font-serif-display text-base text-cream font-semibold mt-0.5">
                            {event.dressCode}
                          </div>
                        </div>
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
