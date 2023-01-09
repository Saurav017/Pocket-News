import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
   </>
  );
}

export default App;
