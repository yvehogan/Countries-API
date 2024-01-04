import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div className="w-full bg-white dark:bg-default">
      <div className="px-4 md:px-16 py-6 flex justify-between items-center shadow-lg">
        <h1 className="text-primary font-bold md:font-extrabold text-xl md:text-2xl dark:text-white">Where in the world?</h1>
         <Button />
      </div>
    </div>
  );
};

export default Header;