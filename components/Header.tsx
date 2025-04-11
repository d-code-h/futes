'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ChevronDownIcon, ChevronRight, Menu, Minus, Plus } from 'lucide-react';
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

const navigationMenuTriggerStyle =
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1';

function Dropdown({ items, depth = 0 }: { items: LinkType; depth?: number }) {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // Store timeout ID

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any existing timeout
    }
    setOpen(true); // Open immediately on hover
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setOpen(false); // Close after a short delay
    }, 200); // Adjust the time delay as needed (e.g., 200ms)
    setTimeoutId(newTimeoutId); // Store the new timeout ID
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(navigationMenuTriggerStyle)}
        onClick={() => setOpen(!open)}
      >
        {items.name}
        {items.subMenu && (
          <ChevronDownIcon className="ml-1 size-3 transition duration-300 group-data-[open]:rotate-180" />
        )}
      </button>
      {items.subMenu && open && (
        <div
          className={cn(
            'absolute top-full mt-2 rounded-md bg-popover border shadow z-50 min-w-[200px] p-2 text-popover-foreground',
            depth > 0 ? 'left-full top-0 ml-1' : 'left-0',
          )}
          onMouseEnter={handleMouseEnter} // Keep open when mouse enters the dropdown
          onMouseLeave={handleMouseLeave} // Close after delay when mouse leaves the dropdown
        >
          {items.subMenu.map((subItem) => (
            <div key={subItem.name} className="relative">
              {subItem.subMenu ? (
                <Dropdown items={subItem} depth={depth + 1} />
              ) : (
                <Link
                  href={subItem.href}
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {subItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Nav({ type }: { type: 'MD' | 'LG' }) {
  return (
    <nav
      className={cn(
        'flex flex-wrap gap-8',
        type === 'MD'
          ? 'hidden md:flex lg:hidden mx-auto justify-center gap-6 my-8'
          : 'hidden lg:flex ms-auto',
      )}
    >
      {navLinks.map((link) => (
        <div key={link.name}>
          {link.subMenu ? (
            <Dropdown items={link} />
          ) : (
            <Link href={link.href} className={cn(navigationMenuTriggerStyle)}>
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

const SubMenu = ({
  menu,
  openSubMenu,
  toggleSubMenu,
}: {
  menu: LinkType[];
  openSubMenu: string | null;
  toggleSubMenu: (itemId: string) => void;
}) => {
  return (
    <div className="pl-2 border-l border-muted">
      {menu.map(({ name, subMenu }, index) => {
        const itemId = `${name}-${index}`.toLowerCase().replace(/\s+/g, '-');

        return (
          <div key={itemId}>
            {/* Main menu item */}
            <div
              className="flex items-center justify-between cursor-pointer py-1 text-lg font-medium hover:underline"
              onClick={() => toggleSubMenu(itemId)}
            >
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 shrink-0" />
                {name}
              </div>
              <div>
                {openSubMenu === itemId ? (
                  <Minus className="w-4 h-4" />
                ) : subMenu ? (
                  <Plus className="w-4 h-4" />
                ) : null}
              </div>
            </div>

            {/* Submenu */}
            <div
              className={`transition-all duration-500 ${
                openSubMenu === itemId
                  ? 'max-h-[1000px] overflow-visible'
                  : 'max-h-0 overflow-hidden'
              }`}
            >
              {openSubMenu === itemId && subMenu && (
                <div className="pl-4">
                  <SubMenu
                    menu={subMenu}
                    openSubMenu={openSubMenu}
                    toggleSubMenu={toggleSubMenu}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (itemId: string) => {
    setOpenSubMenu(openSubMenu === itemId ? null : itemId); // Toggle submenu
  };

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
                  className="p-6 focus:ring-0 focus:outline-none"
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
                className="bg-primary text-white w-64 p-6 overflow-y-auto transition-all"
              >
                <VisuallyHidden>
                  <h2>Navigation Menu</h2>
                </VisuallyHidden>
                <nav className="flex flex-col gap-2 mt-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <div className="flex items-center gap-1">
                        <ChevronRight
                          style={{
                            width: '16px',
                            height: '16px',
                          }}
                        />
                        {link.subMenu ? (
                          <span className="text-lg font-medium hover:underline uppercase">
                            {link.name}
                          </span>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-lg font-medium hover:underline uppercase"
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                      {link.subMenu && (
                        <SubMenu
                          menu={link.subMenu}
                          openSubMenu={openSubMenu}
                          toggleSubMenu={toggleSubMenu}
                        />
                      )}
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
