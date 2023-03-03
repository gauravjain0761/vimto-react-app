import './App.css';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scan from './pages/scan';
import NonWinner from './pages/nonWinner';
import Winner from './pages/winner';
import Settings from './pages/settings';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/nonWinner" element={<NonWinner />} />
      <Route path="/winner" element={<Winner />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
