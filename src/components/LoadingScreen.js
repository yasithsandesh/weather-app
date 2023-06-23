import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-gray-500 rounded-full loader ease-linear border-t-4 border-t-gray-800 h-12 w-12 mb-4"></div>
    </div>
  );
};

export {LoadingScreen};