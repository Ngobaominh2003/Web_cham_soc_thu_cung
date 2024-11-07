import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null); // State để lưu trữ avatar của người dùng
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lấy avatar từ API server dựa trên nguoi_dung_id khi component mount
  useEffect(() => {
    const nguoi_dung_id = localStorage.getItem('nguoi_dung_id');
  
    if (nguoi_dung_id) {
      fetch(`http://localhost:5000/api/users/${nguoi_dung_id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Không thể lấy thông tin người dùng');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Thông tin người dùng:', data);
          setAvatar(data.avata || '/img/icon_tk.png'); // Sử dụng 'avata' từ phản hồi API hoặc ảnh mặc định nếu không có avata
        })
        .catch((error) => {
          console.error('Lỗi khi lấy avatar:', error);
          setAvatar('/img/icon_tk.png'); // Hiển thị ảnh mặc định nếu không lấy được avatar
        });
    }
  }, []);
  
  

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    localStorage.removeItem('nguoi_dung_id');
    setAvatar(null); // Xóa avatar khỏi state
    console.log('User logged out');
    navigate('/Login');
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-white pr-3" href="">
                Câu hỏi thường gặp
              </a>
              <span className="text-white">|</span>
              <a className="text-white px-3" href="">
                Giúp đỡ
              </a>
              <span className="text-white">|</span>
              <a className="text-white pl-3" href="">
                Hỗ trợ
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-3" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-3" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-3" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-3" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-3" href="">
                <div className="container-fluid">
                  <div className="d-flex">
                    <div ref={dropdownRef} className="nav-item dropdown">
                      <a
                        href="#"
                        id="userDropdown"
                        role="button"
                        onClick={toggleDropdown}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                    src={avatar ? `http://localhost:5000/img/${avatar}` : '/img/icon_tk.png'} // Hiển thị avatar từ server hoặc ảnh mặc định
                   
                    className="avatar"
                    style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '50px' }}
                />
                      </a>

                      {open && (
                        <div className="dropdown-menu show rounded-0 mt-2 shadow" aria-labelledby="userDropdown">
                          <Link to="/TaiKhoan" className="dropdown-item">
                            <i className="fas fa-user mr-2"></i> Tài khoản
                          </Link>
                          <Link to="/Login" className="dropdown-item">
                            <i className="fas fa-sign-in-alt mr-2"></i> Đăng Nhập
                          </Link>
                          <Link to="/register" className="dropdown-item">
                            <i className="fas fa-user-plus mr-2"></i> Đăng Ký
                          </Link>
                          <div className="dropdown-divider"></div>
                          <button className="dropdown-item text-danger" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt mr-2"></i> Đăng Xuất
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row py-3 px-lg-5">
          <div className="col-lg-4">
            <Link to="/" className="navbar-brand d-none d-lg-block">
              <h1 className="m-0 display-5 text-capitalize">
                <span className="text-primary">Pet</span>Lover
              </h1>
            </Link>
          </div>
          <div className="col-lg-8 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="d-inline-flex flex-column text-center pr-3 border-right">
                <h6>Giờ Mở Cửa</h6>
                <p className="m-0">8.00AM - 9.00PM</p>
              </div>
              <div className="d-inline-flex flex-column text-center px-3 border-right">
                <h6>Gửi Email Cho Chúng Tôi</h6>
                <p className="m-0">info@example.com</p>
              </div>
              <div className="d-inline-flex flex-column text-center pl-3">
                <h6>Gọi cho chúng tôi</h6>
                <p className="m-0">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
