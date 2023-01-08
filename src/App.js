import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TitleSection from './components/TitleSection/TitleSection';
import Home from './pages/Home';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
   </>
  );
}

export default App;
