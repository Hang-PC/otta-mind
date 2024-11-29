import React, { useState } from 'react';
import { Plus, X } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

const ThoughtsPage: React.FC = () => {
  const [thoughts, setThoughts] = useState<string[]>([]);
  const [newThought, setNewThought] = useState<string>('');
  const [selectedThought, setSelectedThought] = useState<string | null>(null);

  const addThought = () => {
    if (newThought.trim()) {
      setThoughts([...thoughts, newThought.trim()]);
      setNewThought('');
    }
  };

  const deleteThought = (index: number) => {
    setThoughts(thoughts.filter((_, i) => i !== index));
  };

  const chooseRandomThought = () => {
    if (thoughts.length > 0) {
      const randomIndex = Math.floor(Math.random() * thoughts.length);
      setSelectedThought(thoughts[randomIndex]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Your Thoughts
      </h1>

      <div className="w-full max-w-2xl mb-8">
        <div className="flex items-center">
          <input
            type="text"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-grow p-3 rounded-l-lg border-2 border-blue-300 dark:border-blue-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
            onKeyPress={(e) => e.key === 'Enter' && addThought()}
          />
          <button
            onClick={addThought}
            className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <Plus className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="w-full max-w-2xl mb-8 space-y-4 overflow-y-auto max-h-[50vh]">
        <AnimatePresence>
          {thoughts.map((thought, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative text-gray-800 dark:text-gray-200"
            >
              {thought}
              <button
                onClick={() => deleteThought(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        onClick={chooseRandomThought}
        className="w-full max-w-2xl p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Choose One
      </button>

      <AnimatePresence>
        {selectedThought && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full text-center relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Here's your thought! Take action!
              </h2>
              <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
                {selectedThought}
              </p>
              <button
                onClick={() => setSelectedThought(null)}
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ThoughtsPage;
