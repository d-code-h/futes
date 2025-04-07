import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'py-3 md:pt-5 md:pb-12 px-3 md:px-32 lg:px-40 xl:px-52 mx-auto 2xl:px-64',

        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
