import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PostCard from './PostCard';
import { news } from '@/data';

export const News = () => {
  return (
    <Container>
      <section>
        <h2 className="font-bold text-center text-4xl tracking-wider my-8 text-primary">
          News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {news.map((item) => (
            <PostCard key={item.title} data={item} />
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
