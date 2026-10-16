import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';

// Pages
import Home from './pages/home/Home'; 
import Ninikoken from './pages/ninikoken/Ninikoken'; 
import Shigojimu from './pages/shigojimu/Shigojimu'; 
import Sozoku from './pages/sozoku/Sozoku';
import Igon from './pages/igon/Igon';
import Checklist from './pages/checklist/Checklist'
import Contact from './pages/contact/Contact';
import FormSuccess from './pages/form_success/FormSuccess';
import Privacy from './pages/privacy/Privacy';
import NotFound from './pages/not_found/NotFound';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/igon" element={<Igon />} />
        <Route path="/sozoku" element={<Sozoku />} />
        <Route path="/ninikoken" element={<Ninikoken />} />
        <Route path="/shigojimu" element={<Shigojimu />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form_success" element={<FormSuccess />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}