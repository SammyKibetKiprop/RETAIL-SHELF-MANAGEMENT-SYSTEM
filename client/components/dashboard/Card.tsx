import { Card, CardHeader, CardMedia } from '@mui/material';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import Image from 'next/image';

interface MainCardProps {
  item: {
    id: number;
    title: string;
    color: string;
    href: string;
    image: StaticImageData;
  };
}

const MainCard = ({ item }: MainCardProps) => {
  return (
    <Link href={item.href}>
      <Card className='min-w-full md:min-w-auto w-full max-w-40 h-64 shadow-lg rounded-md bg-white cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out relative z-10'>
        <h3 className='font-semibold text-xl tracking-wide p-4'>
          {item.title}
        </h3>
        <CardMedia className='h-full w-full'>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={item.image}
              layout='fill'
              objectFit='cover'
              alt={item.title}
            />
          </div>
        </CardMedia>
      </Card>
    </Link>
  );
};

export default MainCard;
