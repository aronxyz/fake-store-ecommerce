import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import ShopAll from './features/products/ShopAll';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/shop-all' element={<ShopAll />} /> 
      </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
