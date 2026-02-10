"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import mobile1 from "../public/images/mobile1.webp";
import mobile2 from "../public/images/mobile2.webp";
import mobile3 from "../public/images/mobile3.webp";

const images = [mobile1, mobile2, mobile3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-4">
      {/* Mobile View - Single Image */}
      <div className="md:hidden relative h-[350px] w-full">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        
        {/* Mobile Navigation Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#0974C2] w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Multiple Images with Peek Effect */}
      <div className="hidden md:block relative h-[380px] lg:h-[420px]">
        <div className="flex items-center justify-center h-full">
          {/* Previous Image (Left Peek) - LAZY LOAD */}
          <div className="absolute left-0 w-1/4 h-full opacity-50 blur-[2px] transform -translate-x-1/4 z-0">
            <div className="relative w-full h-full rounded-r-2xl overflow-hidden">
              <Image
                src={images[getSlideIndex(-1)]}
                alt="Previous slide"
                fill
                className="object-contain"
                loading="lazy"
                fetchPriority="low"
                sizes="25vw"
              />
            </div>
          </div>

          {/* Current Image (Center - Full) - PRIORITY LOAD */}
          <div className="relative w-3/5 h-full z-10 rounded-2xl overflow-hidden shadow-2xl shadow-[#0974C2]/30 bg-black/20">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
              fetchPriority="high"
              sizes="60vw"
            />
          </div>

          {/* Next Image (Right Peek) - LAZY LOAD */}
          <div className="absolute right-0 w-1/4 h-full opacity-50 blur-[2px] transform translate-x-1/4 z-0">
            <div className="relative w-full h-full rounded-l-2xl overflow-hidden">
              <Image
                src={images[getSlideIndex(1)]}
                alt="Next slide"
                fill
                className="object-contain"
                loading="lazy"
                fetchPriority="low"
                sizes="25vw"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#0974C2]/80 transition-all duration-300 shadow-lg z-20"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#0974C2]/80 transition-all duration-300 shadow-lg z-20"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Desktop Navigation Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#0974C2] w-8"
                  : "bg-white/50 w-3 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;