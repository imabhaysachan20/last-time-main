"use client"
import React, { useEffect, useState } from 'react';
import { fetchReviews } from '../lib/contentful';
import { InfiniteMovingCards } from './ui/Reviews';
import { companies } from '@/data/landing';

interface Review {
  profile: string;
  quote: string;
  name: string;
  title: string;
}

const Clients: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const apifetch = await fetchReviews();
        const formattedReviews: Review[] = apifetch.map((obj: any) => {
          const fields = obj.fields;
          return {
            ...fields,
            profile: fields.profile?.fields?.file?.url || '', // Handle possible undefined
          };
        });
        setReviews(formattedReviews);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  if (loading) {
    return <div className='py-20'>Loading...</div>;
  }

  if (error) {
    return <div className='py-20'>{error}</div>;
  }

  return (
    <div className='py-20'>
      <h1 className='heading'>
        Kind words from{' '}
        <span className='text-purple'>Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards items={reviews} direction="right" speed='slow' />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5' />
              <img src={nameImg} alt={nameImg} className='md:w-24 w-20' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
