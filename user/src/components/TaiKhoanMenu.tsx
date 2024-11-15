import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaShoppingCart, FaBell, FaTags, FaCoins, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../pages/taikhoan/TaiKhoan.css';

const TaiKhoanMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [avatar, setAvatar] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const nguoiDungId = localStorage.getItem('nguoi_dung_id');

        if (nguoiDungId) {
            fetch(`http://localhost:5000/api/users/${nguoiDungId}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Dữ liệu người dùng:', data); // Thêm dòng này để kiểm tra dữ liệu
                    setAvatar(data.avata);
                    setUsername(data.ten_dang_nhap);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy thông tin người dùng:', error);
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
        localStorage.removeItem('nguoi_dung_id');
        setAvatar(null);
        setUsername(null);
    };

    return (
        <div className="custom-page">
            <div className="sidebar">
                <div className="sidebar-user">
                    <img src={avatar ? `http://localhost:5000/img/${avatar}` : '/img/icon_tk.png'} alt={`Avatar của ${username || 'Người dùng'}`} className="avatar" />
                    <p className="username">{username || 'Khách'}</p>
                    <a href="#" className="edit-profile">Sửa Hồ Sơ</a>
                </div>
                <ul className="sidebar-menu">
                    <Link to="/TaiKhoan" className="menu-item active">Tài Khoản Của Tôi</Link>
                    <Link to="/BaiViet1" className="menu-item">Bài viết</Link>
                    <Link to="/ThongBao" className="menu-item">Thông Báo</Link>
                    <Link to="/DSLich" className="menu-item">Lịch hẹn</Link>
                    <Link to="/ShopeeXu" className="menu-item">Shopee Xu</Link>
                </ul>
            </div>

            
        </div>

    );
};

export default TaiKhoanMenu;
