// src/App.tsx
import { Routes, Route } from 'react-router-dom';

// Import your converted Home component
import Home from './pages/home/Home'; 
import Ninikoken from './pages/ninikoken/Ninikoken'; 
import Shigojimu from './pages/shigojimu/Shigojimu'; 
import Sozoku from './pages/sozoku/Sozoku';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/jigon" element={<Jigon />} /> */}
      <Route path="/sozoku" element={<Sozoku />} />
      <Route path="/ninikoken" element={<Ninikoken />} />
      <Route path="/shigojimu" element={<Shigojimu />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}