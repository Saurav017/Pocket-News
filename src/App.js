import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';

function App() {
  return (
   <>
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="/home" exact element={<Home />} />
      
    </Routes>
   </>
  );
}

export default App;
