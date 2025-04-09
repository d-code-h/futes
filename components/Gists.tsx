import React from 'react';
import PostCard from './PostCard';
import { gists } from '@/data';
import Container from './Container';

const Gists = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto justify-center w-11/12  md:w-full my-3 md:my-5">
        {gists.map((gist) => (
          <PostCard key={gist.title} data={gist} />
        ))}
      </div>
    </Container>
  );
};

export default Gists;
