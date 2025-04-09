import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { chooseUsData } from '@/data';

export const ChooseUs = () => {
  return (
    <Container className="bg-primary/75 text-white">
      <section>
        <h2 className="font-semibold text-center text-4xl tracking-wider my-5">
          Why Choose FUTES?
        </h2>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {chooseUsData.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
