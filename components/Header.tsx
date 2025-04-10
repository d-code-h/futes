'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ChevronDown, ChevronRight, ChevronUp, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

interface LinkType {
  name: string;
  href: string;
  subMenu?: LinkType[];
}

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    subMenu: [
      {
        name: 'Overview',
        href: '/about/overview',
        subMenu: [
          {
            name: 'About the University',
            href: '/about/overview/about-the-university',
          },
          {
            name: 'FUTES in Timeline',
            href: '/about/overview/futes-in-timeline',
          },
          {
            name: 'The Chancellor',
            href: '/about/overview/the-chancellor',
          },
          {
            name: 'Principal Officers',
            href: '/about/overview/principal-officers',
          },
          {
            name: 'Management Team',
            href: '/about/overview/management-team',
          },
          {
            name: 'Faculty & Staff Profile',
            href: '/about/overview/faculty-staff-profile',
          },
          {
            name: "FUTES' Vision",
            href: '/about/overview/vision',
          },
          {
            name: 'Contact Us',
            href: '/about/overview/contact-us',
          },
        ],
      },
      {
        name: 'Operations',
        href: '/about/operations',
        subMenu: [
          {
            name: 'Contact Us',
            href: '/about/overview/contact-us',
          },
        ],
      },
    ],
  },
  { name: 'Study', href: '/study' },
  { name: 'Admissions', href: '/admissions' },
  {
    name: 'Information',
    href: '/information',
    subMenu: [
      {
        name: 'Information For',
        href: '/information/information-for',
        subMenu: [
          { name: 'Departments', href: '/information/departments' },
          { name: 'Library', href: '/information/library' },
          { name: 'Notices', href: '/information/notices' },
          { name: 'Student Affairs', href: '/information/student-affairs' },
        ],
      },
      {
        name: 'More',
        href: '/information/more',
        subMenu: [
          { name: 'FAQS', href: '/information/more/faqs' },
          { name: 'News', href: '/information/more/news' },
          { name: 'Student Affairs', href: '/information/student-affairs' },
        ],
      },
      {
        name: 'Portals',
        href: '/information/portals',
        subMenu: [
          {
            name: 'Staff and Student Portal',
            href: '/information/portals/staff-student',
          },
          {
            name: 'E-Learning Portal',
            href: '/information/portals/e-learning',
          },
        ],
      },
    ],
  },
  {
    name: 'Campus Life',
    href: '/campus-life',
    subMenu: [
      { name: 'Campus and Facilities', href: '/campus-life/campus-facilities' },
      { name: 'Campus Tours', href: '/campus-life/campus-Tours' },
    ],
  },
  { name: 'Research & Teaching', href: '/research-teaching' },
];

const Nav = ({ type }: { type: 'MD' | 'LG' }) => {
  return (
    <nav
      className={cn(
        'gap-8',
        type === 'MD'
          ? 'hidden md:flex lg:hidden mx-auto my-8 justify-center'
          : 'hidden lg:flex ms-auto',
      )}
    >
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          <Link
            href={link.href}
            className="font-medium hover:text-blue-600 flex items-center gap-1 group"
          >
            {link.name}
            {link.subMenu && (
              <>
                <ChevronDown
                  style={{
                    width: '18px',
                    height: '18px',
                  }}
                  className="group-hover:hidden"
                />
                <ChevronUp
                  style={{
                    width: '18px',
                    height: '18px',
                  }}
                  className="hidden group-hover:flex"
                />
              </>
            )}
          </Link>
          {link.subMenu && (
            <div className="absolute top-full left-0 bg-white shadow-md mt-2 hidden group-hover:block z-10">
              <ul className="p-4 w-60">
                {link.subMenu.map((sub) => (
                  <li key={sub.name} className="mb-2">
                    <Link
                      href={sub.href}
                      className="block font-medium hover:underline"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

const SubMenu = ({ menu }: { menu: LinkType[] }) => {
  return (
    <ul className="ml-4 border-l border-gray-300 pl-2">
      {menu.map((item) => (
        <li key={item.name} className="py-1">
          {item.subMenu ? (
            <>
              <span className="font-semibold flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" />
                {item.name}
              </span>
              <SubMenu menu={item.subMenu} />
            </>
          ) : (
            <Link
              href={item.href}
              className="hover:underline flex items-center"
            >
              <ChevronRight className="w-4 h-4 mr-1" />
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
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

        {/* Desktop Screen Navigation */}
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
                <nav className="flex flex-col gap-2 mt-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.subMenu ? (
                        <SubMenu menu={link.subMenu} />
                      ) : (
                        <div className="flex items-center gap-1">
                          <ChevronRight
                            style={{
                              width: '16px',
                              height: '16px',
                            }}
                          />
                          <Link
                            href={link.href}
                            className="text-lg font-medium hover:underline uppercase"
                          >
                            {link.name}
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Medium Screen Navigation */}
      <Nav type="MD" />
    </header>
  );
};

export default Header;
