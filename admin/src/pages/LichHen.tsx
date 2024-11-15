import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import DieuKhien from '../components/DieuKhien';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

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

const LichHen: React.FC = () => {
    const [lichHenList, setLichHenList] = useState<LichDat[]>([]);
    const [dichVuList, setDichVuList] = useState<DichVu[]>([]);

    const fetchLichHenList = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/datlich');
            setLichHenList(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách lịch hẹn:', error);
        }
    };

    const fetchDichVuList = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/dichvu');
            setDichVuList(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách dịch vụ:', error);
        }
    };

    const getTenDichVu = (dich_vu_id: string) => {
        const dichVu = dichVuList.find(dv => dv.dich_vu_id === dich_vu_id);
        return dichVu ? dichVu.ten_dich_vu : 'Không xác định';
    };

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
        fetchLichHenList();
        fetchDichVuList();
    }, []);

    return (
        <div>
            <Navigation />
            <div className="main">
                <DieuKhien />
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Lịch Hẹn Chăm Sóc Thú Cưng</h2>
                            <a href="#" className="btn">Xem Tất Cả</a>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Tên khách hàng</th>
                                    <th>Email</th>
                                    <th>Dịch vụ</th>
                                    <th>Ngày đặt</th>
                                    <th>Giờ đặt</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lichHenList.length > 0 ? (
                                    lichHenList.map((lichHen, index) => (
                                        <tr key={index}>
                                            <td>{lichHen.ten_kh}</td>
                                            <td>{lichHen.email_kh}</td>
                                            <td>{getTenDichVu(lichHen.dich_vu_id)}</td>
                                            <td>{format(parseISO(lichHen.ngay_dat), 'yyyy-MM-dd')}</td>
                                            <td>{lichHen.gio_dat}</td>
                                            <td>
                                                <span
                                                    className="status"
                                                    style={getStatusStyle(lichHen.trang_thai)}
                                                >
                                                    {lichHen.trang_thai}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} style={{ textAlign: 'center' }}>Không có lịch hẹn nào</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LichHen;
