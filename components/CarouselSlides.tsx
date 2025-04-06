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

const slides = [
  {
    screen:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

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
            <CarouselItem className="w-full flex-shrink-0 h-full" key={index}>
              <div className="h-full ">
                <Card className="h-full m-0 p-0 ">
                  <CardContent className="relative p-0">
                    <Image
                      src={slide.screen}
                      alt={slide.title}
                      width={1500}
                      height={750}
                      className="w-screen h-full max-h-[750px] aspect-auto object-cover  "
                    />
                    <div className="bg-black/30 w-full h-full absolute top-0 left-0">
                      <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-transparent  bg-opacity-50 text-white p-4 rounded-md space-y-2.5">
                        <h2 className="text-lg md:text-3xl font-bold">
                          {slide.title}
                        </h2>
                        <p className="text-sm md:text-base">
                          {slide.description}
                        </p>
                        <a
                          href="#"
                          className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          Check Page
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <button
          className="absolute top-1/2 left-4 w-10 h-10 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400"
          onClick={handlePrevious}
        >
          <MoveLeft
            style={{
              width: '1.5rem',
              height: '1.5rem',
            }}
          />
        </button>
        <button
          className="absolute top-1/2 right-4 w-10 h-10 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400"
          onClick={handleNext}
        >
          <MoveRight
            style={{
              width: '1.5rem',
              height: '1.5rem',
            }}
          />
        </button>
        <div className="absolute bottom-6  left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-gray-400' : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlides;
