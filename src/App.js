import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import ShopAll from './features/products/ShopAll';
import ProductOverview from './features/products/ProductOverview';
import Bag from './features/bag/Bag';
import CheckoutView from './features/checkout/CheckoutView';

function App() {
  const location = useLocation();

  // Determine if the current path is /checkout
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {!isCheckoutPage && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductOverview />} />
          <Route path="/products/:category" element={<ShopAll />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/checkout" element={<CheckoutView />} />
        </Routes>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
