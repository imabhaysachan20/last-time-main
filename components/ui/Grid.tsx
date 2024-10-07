import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data/landing'
import Link from 'next/link'



const Grid = () => {
  return (
    <section id = "services">
    <BentoGrid className='w-full py-20'>
      {
        gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg},i)=>{return id!=6?<Link className={className} href = {id!=6?`services/${id}`:""}> <BentoGridItem id = {id} key={i} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}/></Link>:<BentoGridItem id = {id} key={i} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}/>})  
      }
    </BentoGrid>
    </section>
  )
}

export default Grid
