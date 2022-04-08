import './App.css';
import Home from './Home';
import About from './About';
import Notfound from './Notfound';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
