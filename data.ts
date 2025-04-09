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

export const chooseUsData = [
  {
    src: '/images/choose-us/choose-us-1.png',
    title: 'Quality Education',
    description:
      'FUTES provides a well-rounded education that equips students with the skills and knowledge needed to excel in their chosen fields. Our curriculum is designed to foster innovation and critical thinking.',
  },
  {
    src: '/images/choose-us/choose-us-2.png',
    title: 'Modern Facilities',
    description:
      'Located in Iyin, Ekiti State, FUTES boasts state-of-the-art facilities, including well-equipped laboratories, libraries, and lecture halls, all designed to create a conducive learning environment.',
  },
  {
    src: '/images/choose-us/choose-us-3.png',
    title: 'Scholarship Opportunities',
    description:
      'FUTES offers various scholarship programs to support students financially, ensuring that talented individuals have access to quality education regardless of their financial background.',
  },
  {
    src: '/images/choose-us/choose-us-4.png',
    title: 'Strong Community',
    description:
      'FUTES fosters a strong sense of community among students, faculty, and alumni. Our active alumni network provides mentorship, career opportunities, and a platform for lifelong connections.',
  },
  {
    src: '/images/choose-us/choose-us-5.png',
    title: 'Serene Environment',
    description:
      'Nestled in the peaceful town of Iyin, Ekiti State, FUTES offers a serene and inspiring environment that promotes focus and academic excellence.',
  },
  {
    src: '/images/choose-us/choose-us-6.png',
    title: 'Academic Excellence',
    description:
      'FUTES is committed to academic excellence, with a dedicated faculty and a track record of producing graduates who excel in their careers and contribute meaningfully to society.',
  },
];

export const news = [
  {
    src: '/images/news/news-1.png',
    title: 'FUTES Hosts Annual Technology Summit in Iyin Ekiti',
    date: 'Oct 10, 2025',
    views: 320,
  },
  {
    src: '/images/news/news-2.png',
    title: 'Iyin Ekiti Celebrates Innovation Week with FUTES Collaboration',
    date: 'Sep 15, 2025',
    views: 275,
  },
  {
    src: '/images/news/news-3.png',
    title: 'FUTES Partners with Local Entrepreneurs to Boost Tech Startups',
    date: 'Nov 05, 2025',
    views: 410,
  },
];

export const statistics = [
  {
    count: 20.0,
    description: 'FUTES Hosts Annual Technology Summit in Iyin Ekiti',
  },
  {
    count: 85,
    description: 'Percentage of Employed Graduates',
  },
  {
    count: 56.36,
    description: 'Student Ratio of Females to Males',
  },
  {
    count: 8644,
    description: 'Number of FTE Students',
  },
];
