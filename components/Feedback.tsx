"use client"

import { useState } from 'react';
import {FaHeadset} from "react-icons/fa"
import {FaWindowClose} from "react-icons/fa"
import { toast } from 'react-toastify';
const FeedbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    const obj:{Name:string,Email:string,Review:string} = {Name:name,Email:email,Review:feedback};
    console.log(obj);
    
fetch('https://sheetdb.io/api/v1/8ld3akc1ibuxe', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
                obj
        ]
    })
})
  .then((response) => response.json())
  .then(() => {
    toast.success("Feedback sent");
  })
  .catch((error)=>{
    toast.error(error?.message);
  });
    setFeedback('');
    setName('');
    setEmail('');
    setIsOpen(false);
  };

  return (
    <div>
      {/* Fixed feedback button at the bottom right with z-index */}
      <button
        className="fixed bottom-5 right-5 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors md:bottom-8 md:right-8 z-50 bg-[#5b116a]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaWindowClose/>:<FaHeadset/> }
      </button>

      {/* Responsive feedback form with dark background and high z-index */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 md:bottom-24 md:right-8 bg-black-100 border border-gray-700 p-4 rounded-lg shadow-xl w-72 md:w-96 text-white z-50">
          <h2 className="text-lg font-semibold mb-3">Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Name:
              <input
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="block mb-2">
              Feedback:
              <textarea
                className="w-full h-24 p-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </label>

<div className="flex justify-end">
            <button className="p-[3px] relative " type ="submit">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Submit
  </div>
</button>
</div>
       
           
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackButton;
