import React from 'react';
import ChatIcon from './components/chatIcon';
import Image from 'next/image';
import background from '../public/background.jpg';


const Home: React.FC = () => {
  return (

    <div className="relative min-h-screen bg-cover bg-center">
      {/* Faded Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      

      {/* Logo at Top-Left */}
      {/* <div className="absolute top-4 left-4 z-20">
        <img src="/path/to/your/logo.png" alt="Logo" className="h-16 w-16" />
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div>
          <p className='text-2xl font-bold '>
            Sample Copilot Studio Chatbot  
          </p>
          <p className='mt-[30px] text-center'>Click on the chat icon to start.</p>
        </div>
        <ChatIcon />
      </div>
    </div>

  );
};

export default Home;
