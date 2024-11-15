import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import TaiKhoanMenu from '../../components/TaiKhoanMenu';
import { format, parseISO } from 'date-fns';
import './TaiKhoan.css';

interface LichDat {
    dat_lich_id: number;
    ten_kh: string;
    email_kh: string;
    ngay_dat: string;
    gio_dat: string;
    dich_vu_id: string;
    trang_thai: string;
}

interface DichVu {
    dich_vu_id: string;
    ten_dich_vu: string;
}

const DSLich: React.FC = () => {
    const [lichDatList, setLichDatList] = useState<LichDat[]>([]);
    const [dichVuMap, setDichVuMap] = useState<Map<string, string>>(new Map()); // Sử dụng Map để lưu tên dịch vụ theo ID
    const nguoiDungId = localStorage.getItem('nguoi_dung_id');
    const getStatusStyle = (trangThai: string) => {
        switch (trangThai) {
            case 'chờ xác nhận':
                return { backgroundColor: '#ffcc00', color: '#fff' };
            case 'đã xác nhận':
                return { backgroundColor: '#4CAF50', color: '#fff' };
            case 'đã hủy':
                return { backgroundColor: '#f44336', color: '#fff' };
            default:
                return {};
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi API để lấy danh sách dịch vụ và chuyển sang Map để truy xuất nhanh
                const dichVuResponse = await axios.get<DichVu[]>('http://localhost:5000/api/dichvu');
                const dichVuData = new Map(dichVuResponse.data.map(dv => [dv.dich_vu_id, dv.ten_dich_vu]));
                setDichVuMap(dichVuData);

                // Gọi API để lấy danh sách lịch đặt
                if (nguoiDungId) {
                    const lichDatResponse = await axios.get<LichDat[]>(`http://localhost:5000/api/datlich/nguoidung/${nguoiDungId}`);
                    setLichDatList(lichDatResponse.data);
                }
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        fetchData();
    }, [nguoiDungId]);

    const handleDelete = async (dat_lich_id: number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa lịch đặt này?")) {
            try {
                await axios.delete(`http://localhost:5000/api/datlich/${dat_lich_id}`);
                setLichDatList(prevList => prevList.filter(lich => lich.dat_lich_id !== dat_lich_id));
                alert('Xóa lịch đặt thành công!');
            } catch (error) {
                console.error('Lỗi khi xóa lịch đặt:', error);
                alert('Có lỗi xảy ra khi xóa lịch đặt.');
            }
        }
    };

    return (
        <div className="dat-lich-page">
            <Header />
            <Navbar />
            <div className="content-container">
                <TaiKhoanMenu />
                <div className="table-container">
                    <h1>Danh Sách Lịch Hẹn</h1>
                    <table className="lich-table">
                        <thead>
                            <tr>
                                <th>Tên Khách Hàng</th>
                                <th>Email</th>
                                <th>Ngày Đặt</th>
                                <th>Giờ Đặt</th>
                                <th>Dịch Vụ</th>
                                <th>Trạng Thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lichDatList.length > 0 ? (
                                lichDatList.map((lich) => (
                                    <tr key={lich.dat_lich_id}>
                                        <td>{lich.ten_kh}</td>
                                        <td>{lich.email_kh}</td>
                                        <td>{format(parseISO(lich.ngay_dat), 'yyyy-MM-dd')}</td>
                                        <td>{lich.gio_dat}</td>
                                        <td>{dichVuMap.get(lich.dich_vu_id) || 'Không xác định'}</td> {/* Lấy tên dịch vụ từ Map */}
                                        <td>
                                                <span
                                                    className="status"
                                                    style={getStatusStyle(lich.trang_thai)}
                                                >
                                                    {lich.trang_thai}
                                                </span>
                                            </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(lich.dat_lich_id)}
                                                style={{ color: 'white', cursor: 'pointer' }}
                                            >
                                                Hủy
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} style={{ textAlign: 'center' }}>
                                        Không có lịch đặt nào
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DSLich;
