import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AirportDelailPage } from './pages/AirportDetailPage';
import { AuthPage } from './pages/AuthPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/auth" element={ <AuthPage /> }/>
        <Route path="/airport/:id" element={ <AirportDelailPage /> }/>
      </Routes>
    </>
  );
}

export default App;
