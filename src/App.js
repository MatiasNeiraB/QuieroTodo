import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin/product/" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
