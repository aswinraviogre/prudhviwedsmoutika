import React from 'react';
import { invitationData } from '../data/invitationData';

export default function HeroSection() {
  const { groom, bride } = invitationData.couple;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Wedding Banner */}
      <img
        src={invitationData.assets.weddingHero}
        alt={`${groom.name} and ${bride.name} wedding illustration`}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center pt-12 sm:pt-20 px-6 text-center">
        {/* Lord Ganesha */}
        <div className="text-rose-deep animate-fade-up">
          <img
            src={invitationData.assets.ganeshIdol}
            alt="Lord Ganesha"
            width={96}
            height={96}
            loading="lazy"
            className="mx-auto h-24 w-24 object-contain drop-shadow-md"
          />
          <p className="font-serif-display italic text-lg sm:text-xl mt-2">
            ‖ Shree Ganeshaya Namah ‖
          </p>
        </div>

        {/* Invitation lead */}
        <p className="mt-8 max-w-md font-serif-display text-base sm:text-lg text-rose-deep animate-fade-up delay-200">
          We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of
        </p>

        {/* Groom */}
        <h1 className="mt-6 animate-fade-up delay-300">
          <span className="block font-script text-7xl sm:text-8xl md:text-9xl text-rose leading-none">
            {groom.name}
          </span>
        </h1>
        <p className="mt-3 font-serif-display text-base sm:text-lg text-foreground/80">
          {groom.parentsTitle}
        </p>

        {/* Connector */}
        <p className="mt-5 font-script text-3xl sm:text-4xl text-rose-deep italic">
          with
        </p>

        {/* Bride */}
        <h1 className="mt-2">
          <span className="block font-script text-7xl sm:text-8xl md:text-9xl text-rose leading-none">
            {bride.name}
          </span>
        </h1>
        <p className="mt-3 font-serif-display text-base sm:text-lg text-foreground/80 pb-12">
          {bride.parentsTitle}
        </p>
      </div>
    </section>
  );
}
