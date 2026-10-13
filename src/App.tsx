// src/App.tsx
import { Routes, Route } from 'react-router-dom';

// Import your converted Home component
import Home from './pages/home/Home'; 

// Placeholder components for the other service pages you linked
//const Jigon = () => <div style={{ padding: '40px' }}><h1>遺言書作成</h1></div>;
//const Sozoku = () => <div style={{ padding: '40px' }}><h1>相続手続き</h1></div>;
//const Ninikoken = () => <div style={{ padding: '40px' }}><h1>任意後見契約</h1></div>;
//const Shigojimu = () => <div style={{ padding: '40px' }}><h1>死後事務委任契約</h1></div>;
//const Contact = () => <div style={{ padding: '40px' }}><h1>お問い合わせ</h1></div>;
//const NotFound = () => <div style={{ padding: '40px' }}><h1>404 - ページが見つかりません</h1></div>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/jigon" element={<Jigon />} /> */}
      {/* <Route path="/sozoku" element={<Sozoku />} /> */}
      {/* <Route path="/ninikoken" element={<Ninikoken />} /> */}
      {/* <Route path="/shigojimu" element={<Shigojimu />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}