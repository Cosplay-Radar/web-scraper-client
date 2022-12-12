import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Convention } from './routes/conventions/Convention.jsx.js';
import { Character } from './routes/characters/Character.jsx.js';
import { About } from './routes/about/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/characters' element={<Character/>}/>
        <Route path='/' element={<Convention/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
