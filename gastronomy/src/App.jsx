import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/HomePage';
import { Host } from './pages/host'
import { Food } from './pages/food'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/host' element={<Host/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 