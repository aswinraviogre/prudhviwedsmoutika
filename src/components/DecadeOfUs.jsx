import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Grid, Sparkles, Image as ImageIcon, X } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function DecadeOfUs() {
  const { decadeOfUs } = invitationData.memories;
  const photos = decadeOfUs?.photos || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [lightboxIndex, setLightboxIndex] = useState(null);
  // Pre-mark known wide photo (id: 10) to avoid layout shift, then detect dynamically onLoad
  const [landscapeIds, setLandscapeIds] = useState({ 10: true });

  const touchStartX = useRef(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const handleLightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleLightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Keyboard navigation & scroll lock while Lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, handleLightboxPrev, handleLightboxNext]);

  if (!photos.length) return null;

  const currentPhoto = photos[currentIndex];
  const lightboxPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, onSwipeLeft, onSwipeRight) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) onSwipeLeft();
    else onSwipeRight();
  };

  const handleImageLoad = (id, e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      const isLandscape = naturalWidth > naturalHeight;
      setLandscapeIds((prev) => (prev[id] === isLandscape ? prev : { ...prev, [id]: isLandscape }));
    }
  };

  return (
    <div className="w-full mt-10">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 px-2">
        <p className="font-cinzel text-[11px] sm:text-xs text-sage-deep tracking-[0.22em] uppercase">
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
        <p className="font-serif-display italic text-base sm:text-lg text-sage-deep max-w-xl mx-auto px-2">
          {decadeOfUs.tagline}
        </p>

        {/* View Mode Toggle Buttons */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setViewMode('carousel')}
            className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-2 transition-all duration-300 ${
              viewMode === 'carousel'
                ? 'bg-rose text-white shadow-soft font-semibold'
                : 'bg-white/80 text-foreground/80 hover:bg-cream border border-gold-soft/50'
            }`}
            aria-label="Polaroid Showcase view"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Polaroid Showcase
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-2 transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-rose text-white shadow-soft font-semibold'
                : 'bg-white/80 text-foreground/80 hover:bg-cream border border-gold-soft/50'
            }`}
            aria-label="View all 10 photos in grid"
          >
            <Grid className="w-3.5 h-3.5" />
            View All 10 Photos
          </button>
        </div>
      </div>

      {/* Mode 1: Carousel / Polaroid Showcase (Zero Crop Adaptive Frame) */}
      {viewMode === 'carousel' && (
        <div className="flex flex-col items-center w-full">
          {/* Carousel Stage: external desktop flanking arrows + centered Polaroid */}
          <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center sm:px-14">
            {/* Desktop Left Arrow (sits completely outside the Polaroid) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-gold-soft shadow-elegant items-center justify-center text-rose-deep hover:bg-rose hover:text-white transition-all duration-300 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Adaptive Polaroid Card - Shrink-wraps cleanly to any portrait or landscape aspect */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, handleNext, handlePrev)}
              className="w-fit max-w-full min-w-[260px] sm:min-w-[300px] mx-auto bg-[#fafafa] border border-gold-soft p-3 sm:p-5 pb-5 sm:pb-7 rounded-sm shadow-elegant transition-all duration-300 relative border-b-[8px] border-b-gold-soft/35 flex flex-col items-center select-none"
            >
              {/* Subtle Polaroid sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none" />

              {/* Tightly-fitted uncropped Photo Wrapper */}
              <div
                className="relative overflow-hidden rounded-sm border border-zinc-200/80 shadow-inner mb-4 cursor-pointer group/img bg-[#f7f4ee] inline-flex items-center justify-center"
                onClick={() => setLightboxIndex(currentIndex)}
                title="Click to view full photo"
              >
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  onLoad={(e) => handleImageLoad(currentPhoto.id, e)}
                  className="w-auto max-w-full h-auto max-h-[58vh] sm:max-h-[66vh] object-contain block transition-all duration-300 group-hover/img:brightness-95"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-2.5 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full text-[11px] font-cinzel shadow-soft flex items-center gap-1.5 border border-gold-soft/60">
                    <ImageIcon className="w-3 h-3 text-rose-deep" /> View Full
                  </span>
                </div>
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="text-center w-full max-w-sm mx-auto px-1">
                <p className="font-script text-3xl sm:text-4xl text-rose-deep leading-tight">
                  {currentPhoto.title}
                </p>
                <p className="font-cinzel text-[10px] tracking-widest text-sage-deep mt-1.5 uppercase leading-relaxed">
                  {currentPhoto.caption}
                </p>

                {/* Mobile Inline Prev / Counter / Next Bar (zero image obstruction) */}
                <div className="mt-4 flex sm:hidden items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="w-9 h-9 rounded-full bg-white border border-gold-soft shadow-soft flex items-center justify-center text-rose-deep active:scale-95 transition-transform"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-serif-display italic text-xs text-sage-deep/90 min-w-[80px]">
                    Photo {currentIndex + 1} of {photos.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="w-9 h-9 rounded-full bg-white border border-gold-soft shadow-soft flex items-center justify-center text-rose-deep active:scale-95 transition-transform"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Desktop Photo Counter */}
                <p className="hidden sm:block font-serif-display italic text-xs text-sage-deep/85 mt-2">
                  Photo {currentIndex + 1} of {photos.length}
                </p>
              </div>
            </div>

            {/* Desktop Right Arrow (sits completely outside the Polaroid) */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-gold-soft shadow-elegant items-center justify-center text-rose-deep hover:bg-rose hover:text-white transition-all duration-300 z-10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* 10 Mini-Polaroid Thumbnail Filmstrip (100% uncropped natural proportions) */}
          <div className="mt-7 sm:mt-8 flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap max-w-3xl mx-auto px-1">
            {photos.map((p, idx) => (
              <button
                type="button"
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to photo ${idx + 1}: ${p.title}`}
                className={`relative p-1 bg-[#fafafa] rounded-lg border-2 transition-all duration-300 flex items-center justify-center min-w-[38px] cursor-pointer ${
                  idx === currentIndex
                    ? 'border-rose scale-105 shadow-gold ring-2 ring-rose/35 z-10'
                    : 'border-gold-soft/60 opacity-75 hover:opacity-100 hover:border-gold'
                }`}
              >
                <div className="h-14 sm:h-16 w-auto overflow-hidden rounded-[4px] flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-auto max-w-none object-contain block"
                    loading="lazy"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mode 2: Memory Wall Grid (All 10 Polaroids - Zero Crop Responsive Layout) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 px-1 sm:px-2 items-center justify-items-center">
          {photos.map((photo, index) => {
            const tilts = ['sm:-rotate-1', 'sm:rotate-1', 'sm:-rotate-2', 'sm:rotate-2', 'sm:-rotate-1'];
            const tilt = tilts[index % tilts.length];
            const isLandscape = Boolean(landscapeIds[photo.id]);

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className={`bg-[#fafafa] border border-gold-soft p-3 sm:p-4 pb-6 rounded-sm shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1.5 hover:rotate-0 cursor-pointer relative group border-b-[6px] border-b-gold-soft/40 flex flex-col items-center w-fit max-w-full ${
                  isLandscape ? 'sm:col-span-2 lg:col-span-3' : ''
                } ${tilt}`}
              >
                {/* Gold washi tape / pin effect */}
                <div className="w-10 h-3 bg-gold/30 border border-gold/40 mx-auto -mt-4 mb-2.5 shadow-sm" />

                {/* Uncropped Photo Container (hugging exact proportions) */}
                <div className="overflow-hidden rounded-sm border border-zinc-200/80 mb-3 bg-[#f7f4ee] inline-flex items-center justify-center">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    onLoad={(e) => handleImageLoad(photo.id, e)}
                    className={`w-auto max-w-full h-auto object-contain block transition-all duration-300 group-hover:brightness-95 ${
                      isLandscape
                        ? 'max-h-[55vh] sm:max-h-[460px]'
                        : 'max-h-[65vh] sm:max-h-[440px]'
                    }`}
                    loading="lazy"
                  />
                </div>

                {/* Caption (wraps cleanly without truncation) */}
                <div className="text-center pt-1 max-w-xs sm:max-w-sm px-1">
                  <p className="font-script text-2xl sm:text-3xl text-rose-deep leading-snug">
                    {photo.title}
                  </p>
                  <p className="font-cinzel text-[9px] sm:text-[10px] tracking-wider text-sage-deep mt-1 uppercase leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal (with Prev/Next, Keyboard & Touch Swipe) */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-5 sm:p-10 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={(e) => handleTouchEnd(e, handleLightboxNext, handleLightboxPrev)}
        >
          <div
            className="relative w-fit max-w-full max-h-[92vh] bg-[#fafafa] p-3 sm:p-6 pb-5 sm:pb-7 rounded-lg shadow-2xl border-2 border-gold flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close photo"
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-9 h-9 rounded-full bg-rose text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Desktop Lightbox Side Nav Arrows */}
            <button
              type="button"
              onClick={handleLightboxPrev}
              aria-label="Previous full photo"
              className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-rose-deep items-center justify-center shadow-lg hover:bg-rose hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleLightboxNext}
              aria-label="Next full photo"
              className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-rose-deep items-center justify-center shadow-lg hover:bg-rose hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Uncropped Full Photo */}
            <div className="overflow-hidden rounded-md bg-[#f7f4ee] border border-zinc-200 mb-3 sm:mb-4 flex items-center justify-center">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.title}
                className="w-auto max-w-full h-auto max-h-[64vh] sm:max-h-[72vh] object-contain block"
              />
            </div>

            {/* Caption & Mobile Navigation */}
            <div className="text-center max-w-md px-2">
              <h4 className="font-script text-3xl sm:text-4xl text-rose-deep leading-tight">
                {lightboxPhoto.title}
              </h4>
              <p className="font-cinzel text-[10px] sm:text-xs text-sage-deep mt-1 uppercase tracking-wider leading-relaxed">
                {lightboxPhoto.caption}
              </p>

              <div className="mt-3 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleLightboxPrev}
                  aria-label="Previous full photo"
                  className="sm:hidden w-8 h-8 rounded-full bg-white border border-gold-soft text-rose-deep flex items-center justify-center shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-serif-display italic text-xs text-sage-deep/85">
                  Photo {lightboxIndex + 1} of {photos.length}
                </span>
                <button
                  type="button"
                  onClick={handleLightboxNext}
                  aria-label="Next full photo"
                  className="sm:hidden w-8 h-8 rounded-full bg-white border border-gold-soft text-rose-deep flex items-center justify-center shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
