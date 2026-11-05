import React, { useState, useEffect } from 'react';
import EnvelopeScreen from './components/EnvelopeScreen';
import HeroSection from './components/HeroSection';
import ScratchCard from './components/ScratchCard';
import CountdownTimer from './components/CountdownTimer';
import MeetTheCouple from './components/MeetTheCouple';
import EventsSchedule from './components/EventsSchedule';
import PresenceSection from './components/PresenceSection';
import FamiliesSection from './components/FamiliesSection';
import VenueSection from './components/VenueSection';
import Footer from './components/Footer';
import PetalsOverlay from './components/PetalsOverlay';
import ButterflyOverlay from './components/ButterflyOverlay';
import AudioPlayer from './components/AudioPlayer';
import { SectionDivider, FloralCornerDecorations } from './components/FloralDecorations';
import { invitationData } from './data/invitationData';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    document.title = `${invitationData.couple.groom.name} & ${invitationData.couple.bride.name} — Wedding Invitation · ${invitationData.ceremony.dateText}`;
  }, []);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => {
      setOpened(true);
    }, 900);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Ambient floating flower petals */}
      <PetalsOverlay count={12} />

      {/* Floating fluttering butterfly once invitation is opened */}
      {opened && <ButterflyOverlay />}

      {/* Background music player - DO NOT CHANGE SONG */}
      <AudioPlayer play={opening || opened} src={invitationData.assets.audio} />

      {!opened ? (
        <EnvelopeScreen onOpen={handleOpen} opening={opening} />
      ) : (
        <main className="relative animate-fade-in">
          {/* Hero Banner with Lord Ganesha invocation & Couple Names */}
          <HeroSection />

          {/* Interactive Scratch-To-Reveal Card and Live Countdown Timer */}
          <section className="relative py-20 px-6 bg-cream">
            <FloralCornerDecorations />
            <div className="relative max-w-3xl mx-auto text-center">
              <SectionDivider />

              {/* Scratch to reveal the Save the Date */}
              <div className="mb-10">
                <ScratchCard
                  revealed={revealed}
                  onRevealed={() => setRevealed(true)}
                />
              </div>

              {/* Live Countdown Timer revealed after scratching */}
              <div
                className={`transition-all duration-700 ${
                  revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
                }`}
                aria-hidden={!revealed}
              >
                <CountdownTimer />
              </div>
            </div>
          </section>

          {/* Meet the Couple & Cherished Memories */}
          <MeetTheCouple />

          {/* Events Schedule */}
          <EventsSchedule />

          {/* Presence Invocation */}
          <PresenceSection />

          {/* The Families */}
          <FamiliesSection />

          {/* Venue & Directions */}
          <VenueSection />

          {/* Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
}
