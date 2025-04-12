import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { aboutLinks } from '@/data';
import { ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-8 md:py-12">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start items-center md:w-1/3">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="w-44 h-44 md:w-full md:h-96 object-contain"
        />
      </div>

      {/* Content Section */}
      <section className="space-y-5 md:w-2/3">
        <h4 className="text-primary text-2xl md:text-4xl uppercase tracking-wide font-bold">
          About Us
        </h4>
        <p>
          FUTES, located in Iyin Ekiti, is a forward-thinking organization
          dedicated to fostering innovation and excellence in technology and
          education. Our mission is to empower individuals and communities
          through cutting-edge solutions and transformative learning
          experiences.
        </p>
        <p>
          At FUTES, we are guided by our Core Values of Innovation, Integrity,
          Collaboration, Excellence, and Community Impact. These values drive
          our commitment to creating a brighter future for everyone we serve.
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
