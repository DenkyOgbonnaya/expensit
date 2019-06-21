import React from 'react';
import './App.css';
import Dashboard from './components/expenses/dashboard';
import NavBar from './components/includes/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Dashboard />
    </div>
  );
}

export default App;
