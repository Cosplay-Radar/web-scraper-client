import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Convention } from './routes/conventions/Convention.jsx';
import { Character } from './routes/characters/Character.jsx';
import { Home } from './components/Home.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/conventions' element={<Convention/>}/>
        <Route path='/characters' element={<Character/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
