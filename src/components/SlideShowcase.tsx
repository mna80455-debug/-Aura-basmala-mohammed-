import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const SLIDES = [
  { url: '/slides/slide0.jpg', title: 'Aura Powder Intro' },
  { url: '/slides/slide1.jpg', title: 'Brand Identity' },
  { url: '/slides/slide2.jpg', title: 'Product Overview' },
  { url: '/slides/slide3.jpg', title: 'Key Benefits' },
  { url: '/slides/slide4.jpg', title: 'Eco Impact' },
  { url: '/slides/slide5.jpg', title: 'Product Formulations' },
  { url: '/slides/slide6.jpg', title: 'Variations & Scents' },
];

export default function SlideShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">Presentation</span>
        <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
          Project Showcase Slides
        </h2>
        <p className="text-[#6F6F6F] dark:text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mt-3">
          Explore the Canva slides detailing the concept, ingredients, and design values of Aura® Powder.
        </p>
      </div>

      {/* Main Slide Viewport */}
      <div className="relative aspect-[16/9] w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl group border border-neutral-800">
        <img
          src={SLIDES[currentIndex].url}
          alt={SLIDES[currentIndex].title}
          className="w-full h-full object-contain select-none"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute right-4 bottom-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-black transition-all duration-300 shadow-md"
          aria-label="View fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        {/* Slide Counter */}
        <div className="absolute left-4 bottom-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/10">
          {currentIndex + 1} / {SLIDES.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="flex gap-3 mt-6 overflow-x-auto pb-4 px-1 scrollbar-thin scrollbar-thumb-neutral-200">
        {SLIDES.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative flex-shrink-0 w-24 sm:w-32 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              idx === currentIndex
                ? 'border-black dark:border-white scale-95 shadow-md'
                : 'border-transparent hover:border-neutral-400 opacity-70 hover:opacity-100'
            }`}
          >
            <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-6xl aspect-[16/9] px-4">
            <img
              src={SLIDES[currentIndex].url}
              alt={SLIDES[currentIndex].title}
              className="w-full h-full object-contain"
            />

            <button
              onClick={handlePrev}
              className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/15 text-white text-sm font-mono border border-white/10">
              {currentIndex + 1} / {SLIDES.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
