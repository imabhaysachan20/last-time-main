"use client"


import { useState} from 'react';

const FeedbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    
    setFeedback('');
    setName('');
    setEmail('');
    setIsOpen(false);
  };

  return (
    <div>
      {/* Fixed feedback button at the bottom right with z-index */}
      <button
        className="fixed bottom-5 right-5 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors md:bottom-8 md:right-8 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Feedback' : 'Give Feedback'}
      </button>

      {/* Responsive feedback form with dark background and high z-index */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 md:bottom-24 md:right-8 bg-gray-800 p-4 rounded-lg shadow-xl w-72 md:w-96 text-white z-50">
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
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-md mt-2 w-full hover:bg-purple-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackButton;
