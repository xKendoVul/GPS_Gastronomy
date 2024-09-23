import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/HomePage';
import { Host } from './pages/host'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/host' element={<Host/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 