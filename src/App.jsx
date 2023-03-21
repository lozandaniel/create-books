import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextBooks } from './context/ContextBooks';
import { Create } from './pages/Create';
import { View } from './pages/view';
import { Home } from './pages/Home';

import './App.css';
import { NavBar } from './components/NavBar';

function App () {
  return (
    <ContextBooks>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ContextBooks>
  );
}

export default App;
