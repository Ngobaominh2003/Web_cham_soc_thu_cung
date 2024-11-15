import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Blog2 from './pages/Blog2';
import Contact from './pages/Contact';
import TaiKhoan from './pages/taikhoan/TaiKhoan';
import BaiViet1 from './pages/taikhoan/BaiViet1';
import DSLich from './pages/taikhoan/DSLich';
import Login from './pages/Login';
import Register from './pages/Register';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog2" element={<Blog2 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TaiKhoan" element={<TaiKhoan />} />
          <Route path="/BaiViet1" element={<BaiViet1 />} />
          <Route path="/DSLich" element={<DSLich />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
