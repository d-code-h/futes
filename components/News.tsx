import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PostCard from './PostCard';

const news = [
  {
    src: '/images/news/news-1.png',
    title: 'FUTES Hosts Annual Technology Summit in Iyin Ekiti',
    date: 'Oct 10, 2025',
    views: 320,
  },
  {
    src: '/images/news/news-2.png',
    title: 'Iyin Ekiti Celebrates Innovation Week with FUTES Collaboration',
    date: 'Sep 15, 2025',
    views: 275,
  },
  {
    src: '/images/news/news-3.png',
    title: 'FUTES Partners with Local Entrepreneurs to Boost Tech Startups',
    date: 'Nov 05, 2025',
    views: 410,
  },
];

export const News = () => {
  return (
    <Container className="bg-primary/45 text-black">
      <section>
        <h2 className="font-semibold text-center text-4xl tracking-wider my-5">
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
