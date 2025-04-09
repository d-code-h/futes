'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { slides } from '@/data';
import Link from 'next/link';

const CarouselSlides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = slides.length;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-tr from-gray-200 to-gray-300">
      <Carousel className="relative">
        <CarouselContent
          className="flex transition-transform duration-500 h-auto"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <CarouselItem className="w-full flex-shrink-0 h-auto" key={index}>
              <Card className="h-full m-0 p-0 border-0 shadow-none">
                <CardContent className="relative p-0">
                  <div className="relative w-full">
                    <Image
                      src={slide.screen}
                      alt={slide.title}
                      width={1500}
                      height={800}
                      className="w-full h-auto sm:h-[750px] object-cover"
                      priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center text-white">
                      <h2 className="text-xl sm:text-3xl font-bold drop-shadow-md">
                        {slide.title}
                      </h2>
                      <p className="mt-2 text-sm sm:text-base drop-shadow-sm max-w-xl">
                        {slide.description}
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md text-white font-medium"
                      >
                        Check Page
                      </Link>
                    </div>

                    {/* Dots inside image */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(i)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            i === activeIndex
                              ? 'bg-blue-600 scale-110'
                              : 'bg-gray-400'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 w-10 h-10 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400 z-20"
          onClick={handlePrevious}
        >
          <MoveLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-4 w-10 h-10 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400 z-20"
          onClick={handleNext}
        >
          <MoveRight className="w-6 h-6" />
        </button>
      </Carousel>
    </div>
  );
};

export default CarouselSlides;
