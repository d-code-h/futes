import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { aboutLinks } from '@/data';
import { ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-8">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start md:w-1/3">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="w-44 h-44 md:w-full md:h-auto object-contain"
        />
      </div>

      {/* Content Section */}
      <section className="space-y-5 md:w-2/3">
        <h4 className="text-primary uppercase tracking-wide font-bold">
          About Us
        </h4>
        <p>
          Covenant University is a growing, dynamic vision-driven University,
          founded on a Christian mission ethos and committed to pioneering
          excellence at the cutting edge of learning. We run with a compelling
          vision of raising a new generation of leaders for the African
          continent. We are doing this on a holistic, human development and
          integrated learning curriculum to raise total Men and Women who will
          develop their world.
        </p>
        <p>
          Our Core-Values of Spirituality, Possibility Mentality, Capacity
          Building, Integrity, Responsibility, Diligence, and Sacrifice are what
          defines our commitment to excellence.
        </p>

        <div className="flex justify-center md:justify-start">
          <Button className="h-12">
            <Link href="/about" className="text-white flex items-center gap-2">
              <span>Read More</span>
              <ChevronRight />
            </Link>
          </Button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
          {aboutLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center gap-2 p-3 bg-primary/10 rounded-md hover:bg-primary/20 transition"
            >
              <span className="text-primary">{link.icon}</span>
              <span className="text-primary font-medium text-sm">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
