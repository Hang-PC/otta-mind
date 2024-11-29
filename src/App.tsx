import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './components/Home';
import ThoughtsPage from './components/ThoughtsPage';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thoughts" element={<ThoughtsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
