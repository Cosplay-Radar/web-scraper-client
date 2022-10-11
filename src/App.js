import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Convention } from './routes/Convention.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/conventions' element={<Convention/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
