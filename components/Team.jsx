import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    avatar: '/team/avatar-1.png',
    name: 'Giovanna Reategui',
    description:
      'As the CEO and lead dancer, Giovanna combines her passion for dance with exceptional leadership to ensure every performance is unforgettable.',
  },
  {
    avatar: '/team/avatar-2.png',
    name: 'Morgana Abreu',
    description:
      'A talented dancer known for her graceful moves and captivating stage presence, Morgana brings energy and elegance to every performance.',
  },
  {
    avatar: '/team/avatar-3.png',
    name: 'Lucas Guedes',
    description:
      'Lucas is a skilled DJ and dancer, seamlessly blending music and movement to create electrifying performances and unforgettable experiences.',
  },
];

const Team = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Our Team
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <Image
                    src={item.avatar}
                    width={100}
                    height={100}
                    alt={`${item.name}'s avatar`}
                    priority
                  />
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.name}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
