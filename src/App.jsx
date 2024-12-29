import { Routes, Route } from 'react-router-dom';
import Shopping from './pages/Shopping/Shopping';
import Cart from './pages/Cart/Cart';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shopping />} />
        <Route path="/buy" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
