import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Moon, Sun, ArrowLeft } from 'react-feather';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center">
        {location.pathname === '/thoughts' && (
          <Link
            to="/"
            className="mr-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            <ArrowLeft size={24} />
          </Link>
        )}
        <Logo />
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
        aria-label={
          theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
        }
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </header>
  );
};

export default Header;
