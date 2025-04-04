'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ChevronRight, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'Research', href: '/research' },
  { name: 'News', href: '/news' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

const Nav = ({ type }: { type: 'MD' | 'LG' }) => {
  console.log('Type', type);
  return (
    // Desktop Navigation
    <nav
      className={cn(
        ' gap-8',
        type === 'MD'
          ? 'hidden md:flex lg:hidden justify-center my-8'
          : 'hidden lg:flex',
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium hover:text-primary transition"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center py-4 px-6 bg-background shadow-md">
        {/* Logo and Text */}
        <div className="flex items-center gap-4">
          <Image src="/icons/logo.png" alt="logo" width={80} height={80} />
          <div className="h-14 w-1 bg-primary rounded-full" />
          <div className="max-w-[220px]">
            <h1 className="text-base font-semibold leading-snug">
              Federal University of Technology and Environmental Sciences
            </h1>
            <p className="text-sm text-muted-foreground">
              Africa&apos;s No. 1 Private University
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <Nav type="LG" />

        {/* Mobile Menu */}
        <div className="flex items-center">
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  className="p-6 focus:ring-0 focus:outline-none "
                  variant="ghost"
                  size="icon"
                >
                  <Menu
                    style={{
                      width: '32px',
                      height: '32px',
                    }}
                  />
                  <VisuallyHidden>
                    <DialogTitle>Open Navigation Menu</DialogTitle>
                  </VisuallyHidden>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-primary text-white w-64 p-6 overflow-y-auto"
              >
                <VisuallyHidden>
                  <h2>Navigation Menu</h2>
                </VisuallyHidden>
                <nav className="flex flex-col gap-4 mt-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex items-center gap-1">
                      <ChevronRight
                        style={{
                          width: '16px',
                          height: '16px',
                        }}
                      />
                      <Link
                        href={link.href}
                        className="text-lg font-medium hover:underline"
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <Nav type="MD" />
    </header>
  );
};

export default Header;
