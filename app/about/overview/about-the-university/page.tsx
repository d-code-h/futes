import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import React from 'react';
import { aboutUniversity } from '@/data';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Core: React.FC<{ type: 'vision' | 'mission' }> = ({ type }) => {
  const { core } = aboutUniversity;
  return (
    <>
      <section className="mb-8 max-sm:px-5">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          {core[type].title}
        </h2>
        <p>{core[type].description}</p>
      </section>
    </>
  );
};

const philosophy = {
  title: 'Our Founding Philosophy',
  description:
    'We believe in the transformative power of education and its role in addressing global challenges through technology and environmental stewardship, with a focus on the development of FUTES, Iyin, Ekiti State.',
  facts: [
    {
      src: '/images/choose-us/choose-us-1.png',
      title: (
        <span>
          A departure from{' '}
          <span className="text-primary font-semibold">form </span>
          to <span className="text-primary font-semibold"> skill</span>
        </span>
      ),
    },
    {
      src: '/images/choose-us/choose-us-2.png',
      title: (
        <span>
          A departure from{' '}
          <span className="text-primary font-semibold">knowledge </span>
          to <span className="text-primary font-semibold"> empowerment</span>
        </span>
      ),
    },
    {
      src: '/images/choose-us/choose-us-3.png',
      title: (
        <span>
          A departure from{' '}
          <span className="text-primary font-semibold">figures </span>
          to{' '}
          <span className="text-primary font-semibold"> future-building</span>
        </span>
      ),
    },
    {
      src: '/images/choose-us/choose-us-4.png',
      title: (
        <span>
          A departure from{' '}
          <span className="text-primary font-semibold">legalism </span>
          to <span className="text-primary font-semibold"> realism</span>
        </span>
      ),
    },
    {
      src: '/images/choose-us/choose-us-5.png',
      title: (
        <span>
          A departure from{' '}
          <span className="text-primary font-semibold">mathematics </span>
          to <span className="text-primary font-semibold"> life-matics</span>
        </span>
      ),
    },
  ],
};

const Page: React.FC = () => {
  const { hero, introduction, values, objectives } = aboutUniversity;
  return (
    <>
      <Hero title={hero} />
      <div className="bg-white text-black">
        <div className="p-4 py-12 flex flex-col md:flex-row gap-8 items-center">
          <Image
            src={introduction.src}
            alt="FUTES Campus"
            width={600}
            height={600}
            className="w-full md:w-1/2 h-auto rounded-lg"
          />

          <section className="text-center md:text-left">
            <h2 className="font-bold text-4xl tracking-wider mb-5 md:my-5 text-primary">
              {introduction.title}
            </h2>
            {introduction.description.map((item, index) => (
              <p className="text-lg mb-4" key={index}>
                {item}
              </p>
            ))}
          </section>
        </div>
      </div>
      <div className="bg-gray-200 p-4 py-12 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 md:w-3/4 lg:w-1/2 md:mx-auto">
          <Core type="vision" />
          <Core type="mission" />
        </div>
      </div>

      <section className="mb-8 text-center bg-primary text-white p-4 py-12 rounded-lg">
        <h2 className="text-4xl font-semibold my-5">{philosophy.title}</h2>
        <p className="max-w-[500px] mx-auto">{philosophy.description}</p>

        <div className="flex flex-wrap gap-4 justify-center mt-8 md:w-3/4 lg:w-11/12 md:mx-auto">
          {philosophy.facts.map((fact, index) => (
            <div className="relative  w-fit md:w-4/12 lg:w-1/4" key={index}>
              <Image
                src={fact.src}
                alt={`Founding philosophy ${index + 1}`}
                width={700}
                height={700}
                className="rounded-lg w-full h-auto object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black max-sm:p-6 p-3 rounded-lg shadow-md w-10/12 max-w-[300px] text-center">
                <h5 className="text-2xl md:text-base lg:text-xl">
                  {fact.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 md:w-3/4 lg:w-1/2 md:mx-auto">
        <section className="mb-8 px-5">
          <h2 className="text-2xl font-semibold mb-2 text-primary">
            {objectives.title}
          </h2>
          <p className="my-3">{objectives.description}</p>
          <ol className="pl-6 list-decimal">
            {objectives.list.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-8 px-5">
          <h2 className="text-2xl font-semibold mb-2 text-primary">
            {values.title}
          </h2>
          <p className="my-3">{values.description}</p>
          <Accordion type="single" collapsible className="w-full">
            {values.list.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <div className="flex justify-between items-center">
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;
