'use client';

import {
  
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [

  {
    path: '/',
    name: <RiLinkedinFill />,
  },

  {
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/dancewithgioandco/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
