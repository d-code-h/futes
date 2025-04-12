import React from 'react';

const Hero = ({ title }: { title: string }) => {
  return (
    <div
      className="w-full 
    bg-primary
    p-6 text-white text-center shadow-lg h-64 flex items-center justify-center"
    >
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
    </div>
  );
};

export default Hero;
