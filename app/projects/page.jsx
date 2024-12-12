'use client';
import React, { useState } from 'react';
import Head from 'next/head'; // Import Head para adicionar metadados
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/8.png',
    category: 'Corporate',
    name: 'Corporate Dance Events',
    description:
      'Dynamic workshops and performances designed to engage and energize corporate teams and audiences.',
    link: '/',
  },
  {
    image: '/work/10.png',
    category: 'Training',
    name: 'Dance Classes',
    description:
      'Comprehensive classes for all levels, teaching a variety of dance styles with expert instructors.',
    link: '/',
  },
  {
    image: '/work/7.png',
    category: 'Personal',
    name: 'Wedding Dance',
    description:
      'Custom choreography for couples to create magical and unforgettable first dance moments.',
    link: '/',
  },
  {
    image: '/work/11.png',
    category: 'Corporate',
    name: 'Team-Building Workshops',
    description:
      'Interactive dance activities fostering collaboration, creativity, and team spirit at work.',
    link: '/',
  },
  {
    image: '/work/12.png',
    category: 'Corporate',
    name: 'Event Dance Shows',
    description:
      'Captivating performances tailored to elevate any corporate event or conference with energy.',
    link: '/',
  },
  {
    image: '/work/9.png',
    category: 'Corporate',
    name: 'Product Launch Performances',
    description:
      'Unique dance showcases that add excitement and enhance visibility during product launches.',
    link: '/',
  },
  {
    image: '/work/5.png',
    category: 'Personal',
    name: 'Hen Party Dance Routines',
    description:
      'Fun, energetic group routines crafted to bring life and laughter to hen party celebrations.',
    link: '/',
  },
  {
    image: '/work/7.png',
    category: 'Personal',
    name: 'Bridesmaids Choreography',
    description:
      'Creative group choreography for bridesmaids to make your wedding day even more special.',
    link: '/',
  },
  {
    image: '/work/6.png',
    category: 'Personal',
    name: 'DJ Services',
    description:
      'Professional services to set the perfect mood for weddings, parties, and private events.',
    link: '/',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all services',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all services');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all services'
      ? project
      : project.category === category;
  });

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Corporate':
        return 'bg-primary';
      case 'Personal':
        return 'bg-secondary';
      case 'Training':
        return 'bg-quartary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <>
      <Head>
        <title>Our Services - Hype-ay</title>
        <meta
          name='description'
          content='Explore the wide range of services offered by Hype-ay, from corporate dance events and training to personal wedding choreography and DJ services. Find the perfect entertainment for every occasion.'
        />
        <meta
          name='keywords'
          content='dance events, events, corporate workshops, wedding dance, hen party, DJ services, training, choreography'
        />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='Our Services - Hype-ay' />
        <meta
          property='og:description'
          content='Discover Hype-ay’s professional dance services for corporate and personal events, including shows, training, and workshops.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://giocorporation.com/services' />
        <meta property='og:image' content='/path-to-image.jpg' />
        <meta property='og:site_name' content='Hype-ay' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Our Services - Hype-ay' />
        <meta
          name='twitter:description'
          content='Professional dance services for all occasions. Hype-ay offers personalized entertainment for corporate and personal events.'
        />
        <meta name='twitter:image' content='/path-to-image.jpg' />
        <link rel='canonical' href='https://giocorporation.com/services' />
      </Head>
      <section className='min-h-screen pt-12'>
        <div className='container mx-auto'>
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            Our services
          </h2>
          {/* tabs */}
          <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
            <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(category)}
                    value={category}
                    key={index}
                    className='capitalize w-[162px] md:w-auto'
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {filteredProjects.map((project, index) => {
                const bgClass = getCategoryClass(project.category);
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} bgClass={bgClass} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Projects;
