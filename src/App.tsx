import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainScreen } from './screens/main';
import { CardProvider } from './store/CardProvider';

function App() {
  return (
    <CardProvider>
      <MainScreen />
    </CardProvider>
  );
}

export default App;
