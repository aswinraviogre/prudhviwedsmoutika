import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid, Sparkles, Image as ImageIcon, X } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function DecadeOfUs() {
  const { decadeOfUs } = invitationData.memories;
  const photos = decadeOfUs?.photos || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  if (!photos.length) return null;

  const currentPhoto = photos[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full mt-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="font-cinzel text-xs text-sage-deep tracking-[0.25em] uppercase">
          {decadeOfUs.subtitle}
        </p>
        <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-rose-deep mt-2">
          {decadeOfUs.title}
        </h3>
        <div className="my-4 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gold-soft" />
          <span className="text-gold text-lg">❀</span>
          <span className="h-px w-16 bg-gold-soft" />
        </div>
        <p className="font-serif-display italic text-base sm:text-lg text-sage-deep max-w-xl mx-auto px-4">
          {decadeOfUs.tagline}
        </p>

        {/* View Mode Toggle Buttons */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setViewMode('carousel')}
            className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-2 transition-all duration-300 ${
              viewMode === 'carousel'
                ? 'bg-rose text-white shadow-soft font-semibold'
                : 'bg-white/80 text-foreground/80 hover:bg-cream border border-gold-soft/50'
            }`}
            aria-label="Slideshow view"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Polaroid Showcase
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-2 transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-rose text-white shadow-soft font-semibold'
                : 'bg-white/80 text-foreground/80 hover:bg-cream border border-gold-soft/50'
            }`}
            aria-label="Grid view"
          >
            <Grid className="w-3.5 h-3.5" />
            View All 10 Photos
          </button>
        </div>
      </div>

      {/* Mode 1: Carousel / Polaroid Showcase */}
      {viewMode === 'carousel' && (
        <div className="flex flex-col items-center">
          {/* Main Featured Polaroid Card */}
          <div className="relative max-w-md w-full px-4">
            <div className="bg-[#fafafa] border border-gold-soft p-4 sm:p-5 pb-8 sm:pb-10 rounded-sm shadow-elegant w-full transition-all duration-500 relative group border-b-[8px] border-b-gold-soft/40">
              {/* Subtle Polaroid shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none" />

              {/* Photo Container */}
              <div
                className="aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm border border-zinc-200 shadow-inner mb-4 sm:mb-5 cursor-pointer relative group/img"
                onClick={() => setLightboxPhoto(currentPhoto)}
                title="Click to view full photo"
              >
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/90 text-foreground px-3 py-1.5 rounded-full text-xs font-cinzel shadow-soft flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" /> View Full
                  </span>
                </div>
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="text-center pt-2">
                <p className="font-script text-3xl sm:text-4xl text-rose-deep leading-tight select-none">
                  {currentPhoto.title}
                </p>
                <p className="font-cinzel text-[10px] tracking-widest text-sage-deep mt-2 select-none uppercase">
                  {currentPhoto.caption}
                </p>
                <p className="font-serif-display italic text-xs text-sage-deep/80 mt-1">
                  Photo {currentIndex + 1} of {photos.length}
                </p>
              </div>
            </div>

            {/* Left / Right Arrow Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 w-11 h-11 rounded-full bg-white/95 border border-gold-soft shadow-elegant flex items-center justify-center text-rose-deep hover:bg-rose hover:text-white transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 w-11 h-11 rounded-full bg-white/95 border border-gold-soft shadow-elegant flex items-center justify-center text-rose-deep hover:bg-rose hover:text-white transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* 10 Thumbnail Strip for quick jumping */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap max-w-2xl px-4">
            {photos.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to photo ${idx + 1}`}
                className={`relative w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === currentIndex
                    ? 'border-rose scale-110 shadow-gold ring-2 ring-rose/40'
                    : 'border-gold-soft/50 opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title || `Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mode 2: Grid / Memory Wall (All 10 Polaroids) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 px-2">
          {photos.map((photo, index) => {
            // Alternating playful tilt for realistic polaroid board feel
            const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1'];
            const tilt = tilts[index % tilts.length];

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className={`bg-[#fafafa] border border-gold-soft p-3 sm:p-4 pb-6 rounded-sm shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:scale-105 cursor-pointer relative group border-b-[6px] border-b-gold-soft/40 ${tilt}`}
              >
                {/* Gold washi tape / pin effect */}
                <div className="w-10 h-3 bg-gold/30 border border-gold/40 mx-auto -mt-4 mb-2 shadow-xs" />

                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm border border-zinc-200 mb-3 relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Caption */}
                <div className="text-center pt-1">
                  <p className="font-script text-2xl text-rose-deep leading-tight truncate">
                    {photo.title}
                  </p>
                  <p className="font-cinzel text-[8px] tracking-wider text-sage-deep mt-1 truncate uppercase">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#fafafa] p-4 sm:p-6 pb-8 rounded-lg shadow-2xl border-2 border-gold"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo"
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-rose text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden rounded-md bg-zinc-100 border border-zinc-200 mb-4 flex items-center justify-center">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.title}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="text-center">
              <h4 className="font-script text-3xl sm:text-4xl text-rose-deep mt-1">
                {lightboxPhoto.title}
              </h4>
              <p className="font-cinzel text-xs text-sage-deep mt-1 uppercase tracking-wider">
                {lightboxPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

