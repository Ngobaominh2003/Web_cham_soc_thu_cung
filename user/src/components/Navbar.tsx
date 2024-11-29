import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <div className="container-fluid p-0  " style={{position: "fixed",top: "160px",  left: 0,right: 0,zIndex: 999,}}>
    
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav mr-auto py-0">
            <Link to="/HomePage" className="nav-item nav-link active">Trang Chủ</Link>
            <Link to="/About" className="nav-item nav-link">Giới Thiệu</Link>
            <Link to="/Service" className="nav-item nav-link">Dịch Vụ</Link>
            <Link to="/Price" className="nav-item nav-link">Giá</Link>
            <Link to="/Booking" className="nav-item nav-link">Đặt Phòng</Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Trang</Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/Blog" className="dropdown-item">Blog </Link>
                <Link to="/Blog2" className="dropdown-item">Chi Tiết Blog </Link>
              </div>
            </div>
            <Link to="/Contact" className="nav-item nav-link">Liên Hệ</Link>
          </div>
          <Link to="/quote" className="btn btn-lg btn-primary px-3 d-none d-lg-block">Nhận báo giá</Link>
        </div>
      </nav>
    </div >
  );
};

export default Navbar;
