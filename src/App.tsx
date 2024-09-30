import React from 'react';
import Header from './components/Header';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <MainContent />
    </div>
  );
};

export default App;