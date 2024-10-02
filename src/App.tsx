import React from 'react';
import Header from './components/Header';
import Home from './Route/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      
    </div>
  );
};

export default App;