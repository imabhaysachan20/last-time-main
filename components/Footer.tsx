"use client"
import { FaLocationArrow } from "react-icons/fa6";
import { nanoid } from 'nanoid'

import React, { useEffect, useState } from "react";
import { fetchSocialLinks } from '../lib/contentful';
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  interface SocialLinks {
    id: number;
    img:string;
    link: string;
  }
  
  const [socialLinks, setSocialLinks] = useState<SocialLinks[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSocialLinks = async () => {
      try {
        const apifetch = await fetchSocialLinks();
        const formattedSocialLinks: SocialLinks[] = apifetch.map((obj: any) => {
          const fields = obj.fields;
          return {
            ...fields,
            img: fields.image?.fields?.file?.url || '',
            id:nanoid(),
          };
        });
        setSocialLinks(formattedSocialLinks);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    getSocialLinks();
  }, []);

  if (loading) {
    return <div className='py-20'>Loading...</div>;
  }

  if (error) {
    return <div className='py-20'>{error}</div>;
  }



  return (
    <footer className="w-full pt-20 pb-10" id="footer">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-10 min-h-70">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@gmail.com">
          <MagicButton
            text="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Vijyapana
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialLinks.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href = {info?.link}>
              <img style={{color:"#fff"}} src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
