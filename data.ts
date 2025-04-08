import {
  Award,
  CalendarDays,
  CircleHelp,
  GraduationCap,
  Library,
  PlaneTakeoff,
  User,
} from 'lucide-react';
import { createElement } from 'react';

export const gists = [
  {
    src: '/images/gists/gist-1.png',
    title: 'Federal University',
    description:
      'FUTES, a newly established Federal University in Iyin-Ekiti, is dedicated to advancing technology education in Nigeria effectively.',
    btn: {
      text: 'Learn More',
      href: '/about',
    },
  },
  {
    src: '/images/gists/gist-2.png',
    title: 'Notice Board',
    description:
      'Important updates and announcements for all students, including schedules, events, and other essential information to keep everyone informed daily.',
    btn: {
      text: 'View Notice Board',
      href: '/about',
    },
  },
  {
    src: '/images/gists/gist-3.png',
    title: 'Admission Information',
    description:
      'Details to guide prospective students in joining Covenant University, including application procedures, requirements, and other relevant information clearly.',
    btn: {
      text: 'Apply Now',
      href: '/about',
    },
  },
];

export const courses = [
  {
    title: 'Environmental Science',
    href: '#',
  },
  {
    title: 'Renewable Energy Technology',
    href: '#',
  },
  {
    title: 'Climate Technology',
    href: '#',
  },
  {
    title: 'Environmental Engineering',
    href: '#',
  },
  {
    title: 'Biotechnology',
    href: '#',
  },
  {
    title: 'Computer Science with Environmental Applications',
    href: '#',
  },
  {
    title: 'Sustainable Design and Architecture',
    href: '#',
  },
  {
    title: 'Green Manufacturing',
    href: '#',
  },
  {
    title: 'Sustainability and Innovation',
    href: '#',
  },
  {
    title: 'Ecological Engineering',
    href: '#',
  },
  {
    title: 'Agroecological Technology',
    href: '#',
  },
  {
    title: 'Environmental Policy and Technology',
    href: '#',
  },
  {
    title: 'Environmental Robotics',
    href: '#',
  },
];

export const aboutLinks = [
  {
    icon: createElement(GraduationCap),
    href: '/apply',
    title: 'Apply',
  },
  {
    icon: createElement(PlaneTakeoff),
    href: '/visit-campus',
    title: 'Visit Campus',
  },
  {
    icon: createElement(User),
    href: '/student',
    title: 'Student',
  },
  {
    icon: createElement(Library),
    href: '/library',
    title: 'Library',
  },
  {
    icon: createElement(Award),
    href: '/scholarship',
    title: 'Scholarship',
  },
  {
    icon: createElement(CalendarDays),
    href: '/events',
    title: 'Events',
  },
  {
    icon: createElement(CircleHelp),
    href: '/faq',
    title: 'FAQ',
  },
];
