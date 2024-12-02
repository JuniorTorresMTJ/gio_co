'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'Corporate',
    name: 'Microsoft Carnival 2024',
    description:
      'An exciting and dynamic dance performance that brought energy and fun to Microsoft’s carnival.',
    link: '/',
  },
  {
    image: '/work/2.png',
    category: 'Corporate',
    name: 'San Juan Party Accenture 2024',
    description:
      'A vibrant celebration with live dance performances that perfectly captured the spirit of San Juan.',
    link: '/',
  },
  {
    image: '/work/2.png',
    category: 'Corporate',
    name: 'Christmas Party at Accenture 2024',
    description:
      'A festive dance showcase that added joy and elegance to Accenture’s annual Christmas party.',
    link: '/',
  },
  {
    image: '/work/11.png',
    category: 'Corporate',
    name: 'Corporate Dance Classes at LinkedIn',
    description:
      'Engaging and fun dance workshops designed to energize and connect LinkedIn’s corporate teams.',
    link: '/',
  },
  {
    image: '/work/2.png',
    category: 'Corporate',
    name: 'Corporate Dance Classes at LinkedIn',
    description:
      'Professional and enjoyable classes that brought LinkedIn employees together through dance.',
    link: '/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Celebrating Moments</h2>
          <p className='subtitle mb-8'>
          We believe every event tells a story. From dazzling performances to unforgettable celebrations, we bring passion and artistry to life. Here’s a glimpse into some of the magical moments we’ve had the honor of creating.
          </p>
          <Link href='/projects'>
            <Button>Our Services</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;