"use client";
import { nanoid } from "nanoid";

import "../../app/globals.css"
import { useScroll, useTransform } from "framer-motion";

import { GoogleGeminiEffect } from '@/components/ui/GeminiEffect';
import React from "react";


import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import ChooseUs from '@/components/ChooseUs';
import Hero from "@/components/Services/Hero";
import Work from "@/components/Services/Work";
import { useEffect, useState } from "react";
import { contenetfulFetch } from '@/lib/contentful';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/landing";


interface Projects {
  title:string;
  link:string;
  thumbnail:string;
}


const ServiceComp = ({object}:any) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
 
  const [projects, setProjects] = useState<Projects[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getProjects = async () => {
      try {
        
        
        const apifetch = await contenetfulFetch(object.contentfulFetch);
        const formattedProjects: Projects[] = apifetch.map((obj: any) => {
          const fields = obj.fields;
          console.log(fields);
          
          return {
            ...fields,
            thumbnail: "http:"+fields.thumbnail?.fields?.file?.url || '',
            id:nanoid(),
          }
        });
        setProjects(formattedProjects);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) {
    return <div className='py-20'>Loading...</div>;
  }

  if (error) {
    return <div className='py-20'>{error}</div>;
  }

  {if (!object || !navItems) {

    return <div className="flex items-center justify-center w-screen h-screen bg-black-100">Loading...</div>; // Or a placeholder component
    }}
  return (
    <div className='w-full' >
     <FloatingNav navItems={navItems}/>
   <Hero serviceName={object?.heroSection?.title} serviceDesc={object?.heroSection?.subtitle}/>

    <Work desc={object?.whatWeOffer?.features.map((obj:any)=>{return obj.feature}).join(", ")} projects={projects}/>
  
<section className='w-[100vw] overflow-hidden'>
  <Clients></Clients>
</section>

<section className='h-screen mt-10   pt-20 pb-10 w-screen'>
    <div
      className="h-[400vh] z-0 bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  </section>
  <ChooseUs features={object?.keyBenefits?.benefits}/>
<section className='z-50'>
  <Footer></Footer>
</section>
    </div>
  )
}

export default ServiceComp
