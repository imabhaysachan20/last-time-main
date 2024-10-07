import React from 'react'

const ChooseUs = ({features}:{ features: { icon: string; title: string; description: string; }[]; }) => {
  return (
    <section className='z-50 flex flex-col gap-y-72'>
    <div className='w-[60vw] z-50 h-[10vh] rounded mx-auto flex items-center justify-center'>
      <h2 className='text-7xl z-50 font-extrabold'>Why Choose <span className='text-purple'>Us?</span></h2>
    </div>
        {features.map(({icon,title,description}:{icon:string,title:string,description:string})=>{return <div key={title} className='w-[80vw] md:w-[40vw] z-50 h-[25vh] rounded mx-auto flex flex-col items-center justify-center gap-y-4 bg-black-200 rounded-xl'>
            <h2 className='text-3xl z-50 font-extrabold'>{icon}{title.split(" ")[0]}  <span className='text-purple'>{title.split(" ").slice(1).join(" ")}</span></h2>
            <p className='text-md z-50 font-light'>{description}</p>
        </div>})}
    
    <div className='w-[80vw] md:w-[40vw] z-50 h-[75vh] rounded mx-auto flex flex-col items-center justify-center gap-y-4  rounded-xl'>

    </div>

  </section>
  )
}

export default ChooseUs
