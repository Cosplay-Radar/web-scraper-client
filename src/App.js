import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Search from '../routes/search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <h1>Hello World</h1>
    </BrowserRouter>
  );
}

export default App;
