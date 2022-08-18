import { Route, Routes } from 'react-router-dom';
import Cart from '../src/pages/Cart';
import Home from '../src/pages/Home';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    <div className='contaner'>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
          
       
    </div>
    
  );
}

export default App;
