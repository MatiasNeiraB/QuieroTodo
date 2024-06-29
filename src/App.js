import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Admin from './pages/Admin';
import LoginForms from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginForms/>} />
        <Route path="/product" element={<Products/>} />
        <Route path="/admin/product/" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
