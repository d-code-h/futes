import React from 'react';
import PostCard from './PostCard';
import { gists } from '@/data';
import Container from './Container';

const Gists = () => {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 mx-auto justify-center w-11/12  md:w-full my-3 md:my-5 flex-1">
        {gists.map((gist) => (
          <PostCard key={gist.title} data={gist} />
        ))}
      </div>
    </Container>
  );
};

export default Gists;
