import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { courses, programEnrollement } from '@/data';
import Image from 'next/image';
import { ChevronRightCircle } from 'lucide-react';

const Departments = () => {
  return (
    <Container className="bg-gray-200 py-8 md:py-12">
      <div>
        <nav className="flex flex-wrap gap-2 p-3 md:p-5">
          {courses.map((course, index) => (
            <Link
              key={course.title}
              href={course.href}
              className={cn(
                'text-primary hover:text-primary/75 font-semibold text-xs md:text-sm',

                index !== courses.length - 1
                  ? 'after:content-[""] after:inline-flex after:items-end after:w-0.5 after:h-3 after:bg-primary after:ms-1'
                  : '',
              )}
            >
              {course.title}
            </Link>
          ))}
        </nav>

        <p className="text-center my-5 md:my-8 text-2xl md:text-4xl text-primary before:md:content-[''] before:w-2 before:h-7 before:bg-primary before:rounded-full before:md:inline-block before:align-middle before:mx-2">
          Apply to more than
          <span
            className="text-primary text-4xl font-bold
          "
          >
            {' '}
            12{' '}
          </span>
          areas of study in
          <span className="text-primary text-4xl font-bold"> FUTES </span>
        </p>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5">
            {programEnrollement.map((program, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-primary"
                tabIndex={0}
              >
                <Image
                  src={program.src}
                  alt={program.title}
                  width={500}
                  height={400}
                  priority
                  className="w-full h-72 object-cover "
                />
                <div className="absolute inset-0 bg-black/35 bg-opacity-50 flex items-end p-4">
                  <p className="text-white text-lg font-semibold">
                    {program.title}
                  </p>
                </div>
                <div className="absolute inset-0 bg-slider text-white flex flex-col justify-center gap-3 p-5 transform translate-x-full group-hover:translate-x-0 group-focus-within:translate-x-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm mb-4">{program.description}</p>
                  <Link
                    href={program.btn.href}
                    className="w-fit bg-white text-green-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 flex items-center gap-2 transition duration-300"
                  >
                    <span>{program.btn.text}</span>
                    <ChevronRightCircle />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Departments;
