import React from 'react';
import PostCard from './PostCard';
import { gists } from '@/data';

const Gists = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-8 mx-auto justify-center w-11/12  md:w-full my-3 md:my-5 flex-1">
      {gists.map((gist) => (
        <PostCard key={gist.title} data={gist} />
      ))}
    </div>
  );
};

export default Gists;
