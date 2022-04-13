import './App.css';
import Home from './Home';
import About from './About';
import Notfound from './Notfound';
import QueryString from './QueryString';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id_0" element={<About />} />
        <Route path="/query/:id_1" element={<QueryString />} />
        <Route path="*" element={<Notfound />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
