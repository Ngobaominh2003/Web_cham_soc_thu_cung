import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import DieuKhien from '../components/DieuKhien';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import axios from 'axios';

interface User {
    nguoi_dung_id: number;
    ten_dang_nhap: string;
    mat_khau: string;
    email: string;
    sdt?: string;
    gioi_tinh?: 'nam' | 'nữ' | 'khác';
    vai_tro?: 'quản trị' | 'nhân viên' | 'người dùng' | 'cộng tác viên';
    ngay_tao?: string;
    avata?: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]); // Mảng người dùng
    const [loading, setLoading] = useState<boolean>(true); // Trạng thái tải
    const [selectedUser, setSelectedUser] = useState<User | null>(null); // Trạng thái để lưu người dùng được chọn

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('http://localhost:5000/api/users'); // Địa chỉ API để lấy người dùng
                setUsers(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false); // Đã hoàn thành việc tải
            }
        };

        fetchUsers(); // Gọi hàm fetchUsers
    }, []);

    if (loading) return <p>Đang tải...</p>;

    // Hàm xóa người dùng
    const deleteUser = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Xóa người dùng thành công');
                setUsers(prevUsers => prevUsers.filter(user => user.nguoi_dung_id !== id)); // Cập nhật giao diện sau khi xóa
            } else {
                const errorData = await response.json();
                alert('Không thể xóa người dùng');
            }
        } catch (error) {
            console.error('Lỗi khi xóa người dùng:', error);
            alert('Lỗi kết nối, không thể xóa người dùng');
        }
    };

    // Hàm xử lý khi nhấn vào hàng để chọn người dùng
    const handleRowClick = (user: User) => {
        setSelectedUser(user); // Cập nhật người dùng được chọn
    };

    return (
        <div>
            <Navigation />
            <div className="main">
                <DieuKhien />

                {/* ================ Order Details List ================= */}
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>USER</h2>
                            <a href="#" className="btn">View All</a>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Tên Đăng Nhập</td>
                                    <td>Mật Khẩu</td>
                                    <td>Email</td>
                                    <td>Vai Trò</td>
                                    <td>SĐT</td>
                                    <td>Giới Tính</td>
                                    <td>Avatar</td>
                                    <td>Ngày Tạo</td>
                                    <td>Hành Động</td>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.nguoi_dung_id} onClick={() => handleRowClick(user)}>
                                        <td>{user.nguoi_dung_id}</td>
                                        <td className="ellipsis">{user.ten_dang_nhap}</td>
                                        <td className="ellipsis">{user.mat_khau}</td>
                                        <td className="ellipsis">{user.email}</td>
                                        <td>{user.vai_tro}</td>
                                        <td>{user.sdt}</td>
                                        <td>{user.gioi_tinh}</td>
                                        {/* Move the img tag inside the td */}
                                        <td>
                                            <img
                                                src={`http://localhost:5000/img/${user.avata}`}
                                                alt={`Avatar ${user.ten_dang_nhap}`}
                                                className="avatar"
                                            />
                                        </td>
                                        <td>{user.ngay_tao}</td>
                                        <td>
                                            <button className="btn delete-btn" onClick={(e) => { e.stopPropagation(); deleteUser(user.nguoi_dung_id); }}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

                <div className="details-container">
                    <UpdateUser user={selectedUser} />
                    <AddUser />
                </div>
            </div>
        </div>
    );
};

export default Users;
