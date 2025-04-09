import AboutUs from '@/components/AboutUs';
import CarouselSlides from '@/components/CarouselSlides';
import { ChooseUs } from '@/components/ChooseUs';
import Departments from '@/components/Departments';
import Footer from '@/components/Footer';
import Gists from '@/components/Gists';
import { News } from '@/components/News';
import { Statistics } from '@/components/Statistics';

export default function Home() {
  return (
    <>
      <CarouselSlides />
      <Gists />
      <Departments />
      <AboutUs />
      <ChooseUs />
      <News />
      <Statistics />
      <Footer />
    </>
  );
}
