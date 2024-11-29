import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ThoughtsPage from './components/ThoughtsPage';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thoughts" element={<ThoughtsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
