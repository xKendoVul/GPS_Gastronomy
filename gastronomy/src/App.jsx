import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/HomePage';
import { Host } from './pages/host'
import { Food } from './pages/food'
import { Login} from './pages/login'
import { Register } from './pages/register'
import { ProductDetailPage} from './pages/product_detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/host' element={<Host/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product' element={<ProductDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 