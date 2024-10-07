"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax2 = ({
  products, tit, desc
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[], tit: string, desc: string
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <>
    <Header tit={tit} desc={desc} />
    <div
    ref={ref}
    className="h-[500vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col"
    >
     
      <motion.div
        style={{
          translateY,
        }}
      >
        <motion.div className="flex flex-col items-center mb-20">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export const Header = ({desc,tit}:{desc:string,tit:string}) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        {tit}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {desc}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      className="group/product h-64 my-8 md:h-96 w-full md:w-[30rem] relative flex-shrink-0 mb-4"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover  object-center absolute h-full w-full inset-0"
          alt={product.title}
          onError={(e) => {
            e.currentTarget.src = '/path/to/fallback-image.jpg';
          }}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black transition-opacity duration-300 ease-in-out"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300 ease-in-out">
        {product.title}
      </h2>
    </motion.div>
  );
};
