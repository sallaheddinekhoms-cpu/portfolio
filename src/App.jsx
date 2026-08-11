import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import BikesApp from './pages/prototypes/BikesApp';
import CraftsmenApp from './pages/prototypes/CraftsmenApp';
import HostelsDashboard from './pages/prototypes/HostelsDashboard';
import MedSpaceApp from './pages/prototypes/MedSpaceApp';
import MakingLabsApp from './pages/prototypes/MakingLabsApp';
import BMStockingApp from './pages/prototypes/BMStockingApp';
import OpticaSysApp from './pages/prototypes/OpticaSysApp';
import FloraApp from './pages/prototypes/FloraApp';
import './index.css';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        
        {/* Interactive Prototypes */}
        <Route path="/prototypes/bikes" element={<BikesApp />} />
        <Route path="/prototypes/craftsmen" element={<CraftsmenApp />} />
        <Route path="/prototypes/hostels" element={<HostelsDashboard />} />
        <Route path="/prototypes/medspace" element={<MedSpaceApp />} />
        <Route path="/prototypes/making-labs" element={<MakingLabsApp />} />
        <Route path="/prototypes/bm-stocking" element={<BMStockingApp />} />
        <Route path="/prototypes/optica-sys" element={<OpticaSysApp />} />
        <Route path="/prototypes/flora" element={<FloraApp />} />
      </Routes>
    </Router>
  );
}

export default App;
