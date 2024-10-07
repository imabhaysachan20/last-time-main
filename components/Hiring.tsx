import React from 'react'

const Hiring = () => {
  return (
    <div className="my-20 py-20 border border-opacity-20 hover:border-opacity-30 transition duration-150 border-white-100 rounded-lg">
        <div className="flex flex-col justify-center items-center md:gap-x-8 gap-y-8  md:flex-row">
            <img src = "../hiring.svg" className='w-16 h-16' alt="" />
        <h1 className="heading">
      We are{" "}
      <span className="text-purple">Hiring!</span>
    </h1>
        </div>
    <div className="flex flex-col md:flex-row  justify-center items-center gap-x-2 mt-8">
    <p className='font-extralight tracking-wider'> Send you Resume/CV -</p>
    <p className='cursor-pointer font-bold underline'><a href = "mailto:vijyapana@gmail.com">vijyapana@gmail.com</a></p> 
    </div>
    </div>
  )
}

export default Hiring
