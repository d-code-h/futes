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

export const slides = [
  {
    screen:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    screen:
      'https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export const programEnrollement = [
  {
    title: 'Postgraduate',
    src: 'https://images.unsplash.com/photo-1594686948539-2709857f7066?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Postgraduate programs are advanced academic programs designed for students who have already completed an undergraduate degree and wish to pursue specialized education.',
    btn: {
      text: 'Learn More',
      href: '/apply/postgraduate',
    },
  },
  {
    title: 'Undergraduate',
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "Undergraduate programs are designed for students who have completed their secondary education and are seeking to earn a bachelor's degree.",
    btn: {
      text: 'Learn More',
      href: '/apply/undergraduate',
    },
  },
  {
    title: 'International Students',
    src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Programs for international students are tailored to meet the needs of students from around the world, offering a diverse and inclusive academic environment.',
    btn: {
      text: 'Learn More',
      href: '/apply/international',
    },
  },
];
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

export const aboutUniversity = {
  hero: 'Welcome to FUTES',
  introduction: {
    src: '/icons/logo.png',
    title: 'About the University',
    description: [
      'Covenant University is a private Christian University, which has been operating with official status since 2002 in Ota, Ogun State, Nigeria.',
      "Covenant University is one of the leading universities in Africa found on Christian mission ethos. She drives a vision to raise a new generation of leaders and reinstate the black race's dignity;.",
      'The university has four colleges which includes: The College of Business and Social Sciences; College of Leadership and Development Studies; College of Engineering, and the College of Science and Technology.',
      'Covenant University has had a rapid rise in nearly two decades of its existence. The webometric ranking named Covenant University the best Private University in Nigeria in its 2021 ranking and the second best university overall.',
    ],
  },
  core: {
    vision: {
      title: 'Vision',
      description:
        'To be a world-class university committed to advancing technology and environmental sciences, raising a new generation of leaders equipped to address global challenges.',
    },
    mission: {
      title: 'Mission',
      description:
        'To be a world-class university committed to advancing technology and environmental sciences, raising a new generation of leaders equipped to address global challenges.',
    },
  },
  values: {
    title: 'Our Core Values',
    description:
      'Our core values are the defining components of the FUTES vision. They reflect our beliefs in the encrypted truths that firmly define our purpose and the underlining ethos of our existence as a University in Iyin, Ekiti State.',
    list: [
      {
        title: 'Innovation',
        description:
          'We are committed to fostering a culture of innovation and creativity in all our endeavors.',
      },
      {
        title: 'Integrity',
        description:
          'Integrity is the foundation of our academic and social environment. We expect all members of our community to uphold the highest standards of honesty and ethical behavior.',
      },
      {
        title: 'Excellence',
        description:
          'We strive for excellence in all our endeavors, from academics to research and community service. Our commitment to quality is unwavering.',
      },
      {
        title: 'Responsibility',
        description:
          'We believe in the importance of personal and social responsibility. Our students are encouraged to be accountable for their actions and to contribute positively to society.',
      },
      {
        title: 'Sustainability',
        description:
          'We are committed to promoting sustainable practices in all aspects of our operations. Our goal is to create a positive impact on the environment and society.',
      },
      {
        title: 'Community',
        description:
          'We value collaboration and teamwork, fostering a sense of belonging and support among our students, faculty, and staff.',
      },
      {
        title: 'Diversity',
        description:
          'We celebrate diversity and inclusivity, recognizing that different perspectives enrich our community and enhance the learning experience.',
      },
      {
        title: 'Respect',
        description:
          'We promote a culture of respect and understanding, where all individuals are valued and treated with dignity.',
      },
    ],
  },
  objectives: {
    title: 'Our Objectives',
    description: 'Our objectives as a University are to:',
    list: [
      'Provide facilities for learning and give instructions and training in such areas of knowledge that will produce sound and mentally equipped graduates, who will provide intellectual leadership in academic institutions, industry, and the public sector through the Total Man Concept approach;',
      'Develop and offer academic and professional programmes leading to the award of diplomas, first degrees, and higher degrees, which emphasize planning, adaptive and technological maintenance, developmental and productive skills; promote by research and other means, the advancement of knowledge and its practical;',
      'Application to social, cultural, economic, scientific, and technological problems; Encourage and promote scholarship and conduct research in all fields of learning and human endeavour;',
      'Disseminate scientific and technological knowledge among scientists, researchers, industries, trade services, and other bodies; and',
      "Relate its activities to Nigeria's technological, scientific, and socio-economic needs, with a special focus on the development of Iyin, Ekiti State, and undertake other activities appropriate for a university of the highest standard.",
    ],
  },
};
