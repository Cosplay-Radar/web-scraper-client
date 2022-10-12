import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Convention } from './routes/conventions/Convention.jsx';
import { Character } from './routes/characters/Character.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Convention/>}/>
        <Route path='/characters' element={<Character/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
