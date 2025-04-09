import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { statistics } from '@/data';

export const Statistics = () => {
  return (
    <Container className="bg-primary/45 text-black">
      <section>
        <h2 className="font-bold text-center text-4xl tracking-wider my-5 text-primary">
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

      <Button
        variant="ghost"
        className="block mx-auto my-8 hover:bg-transparent text-xl"
      >
        <Link
          href="/about-us"
          className="text-primary font-semibold uppercase rounded-lg px-4 flex items-center gap-2 py-3"
        >
          <span>See All News</span>
          <ChevronRight />
        </Link>
      </Button>
    </Container>
  );
};
