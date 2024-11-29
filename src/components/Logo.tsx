import React from 'react';
import { Wind } from 'react-feather';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Wind className="h-8 w-8 text-purple-500" />
      <span className="text-2xl font-bold text-gray-800 dark:text-gray-300">
        Otta-Mind
      </span>
    </div>
  );
};

export default Logo;
