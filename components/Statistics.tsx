import React from 'react';
import Container from './Container';
import { statistics } from '@/data';

export const Statistics = () => {
  return (
    <Container className="bg-primary/45 text-black">
      <section>
        <h2 className="font-bold text-center text-4xl tracking-wider my-8 text-primary">
          Key Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {statistics.map((item) => (
            <div
              className="flex flex-col items-center justify-center gap-6 text-center bg-primary text-white py-8 px-12"
              key={item.count}
            >
              <p className="text-base">{item.description}</p>
              <h4 className="font-semibold text-3xl">{item.count}</h4>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
