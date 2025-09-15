import React from 'react';
import Essay from '../assets/components/Essay.jsx';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 w-full flex items-center justify-center px-4 pt-24">
      <div className="flex flex-col items-start max-w-3xl w-full gap-5">
        <Essay />
      </div>
    </div>
  );
};

export default About;
