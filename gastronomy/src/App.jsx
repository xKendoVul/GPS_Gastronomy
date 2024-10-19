import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage';
import { Host } from './pages/host'
import { Food } from './pages/food'
import { Login} from './pages/login'
import { Register } from './pages/register'
import { ProductDetails} from './components/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/host' element={<Host/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product/1/' element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 