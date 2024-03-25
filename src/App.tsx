import React from 'react';
import './App.css';
import AppRouter from "./provider/appRouter";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App p-3 bg-secondary min-vh-100">
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
