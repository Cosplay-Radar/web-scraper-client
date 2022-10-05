import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Search } from './routes/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
