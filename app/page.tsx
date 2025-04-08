import AboutUs from '@/components/AboutUs';
import CarouselSlides from '@/components/CarouselSlides';
import Departments from '@/components/Departments';
import Gists from '@/components/Gists';

export default function Home() {
  return (
    <>
      <CarouselSlides />
      <Gists />
      <Departments />
      <AboutUs />
    </>
  );
}
