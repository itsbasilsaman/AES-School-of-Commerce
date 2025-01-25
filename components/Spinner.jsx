// components/Spinner.js
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center my-[15px] ">
      <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
