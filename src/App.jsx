import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextBooks } from './context/ContextBooks';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import { View } from './pages/View';
import { NotFound } from './pages/NotFound';
import './App.css';

function App () {
  return (
    <div className='container px-4 mx-auto'>
      <ContextBooks>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextBooks>
    </div>
  );
}

export default App;
