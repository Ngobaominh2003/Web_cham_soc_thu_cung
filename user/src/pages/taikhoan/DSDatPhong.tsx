import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import TaiKhoanMenu from '../../components/TaiKhoanMenu';
import { format, parseISO } from 'date-fns';
import '../css/TaiKhoan.css';

interface DatPhong {
  dat_phong_id: number;
  ten_khach_hang: string;
  email: string;
  sdt: string;
  phong_id: number;
  ngay_bat_dau: string;
  ngay_ket_thuc: string;
  trang_thai: 'đang hoạt động' | 'đã hết hạn'; // Trạng thái đơn đặt phòng
}

interface Phong {
  phong_id: number;
  so_phong: string;
}

const DSDatPhong: React.FC = () => {
  const [datPhongList, setDatPhongList] = useState<DatPhong[]>([]); // Danh sách đơn đặt phòng
  const [phongMap, setPhongMap] = useState<Map<number, string>>(new Map()); // Map phòng theo ID
  const nguoiDungId = localStorage.getItem('nguoi_dung_id');
  
  // Lấy trạng thái của đặt phòng dựa trên ngày
  const getStatusStyle = (ngay_bat_dau: string, ngay_ket_thuc: string) => {
    const today = new Date();
    const startDate = new Date(ngay_bat_dau);
    const endDate = new Date(ngay_ket_thuc);

    if (today < startDate) {
      return { backgroundColor: '#ffcc00', color: '#fff' }; // Sắp tới
    } else if (today >= startDate && today <= endDate) {
      return { backgroundColor: '#4CAF50', color: '#fff' }; // Đang diễn ra
    } else {
      return { backgroundColor: '#f44336', color: '#fff' }; // Đã kết thúc
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách phòng
        const phongResponse = await axios.get<Phong[]>('http://localhost:5000/api/phong');
        const phongData = new Map(phongResponse.data.map(phong => [phong.phong_id, phong.so_phong])); // Chỉnh lại sao cho đúng với ID phòng
        setPhongMap(phongData);

        // Lấy danh sách đơn đặt phòng của người dùng
        if (nguoiDungId) {
          const datPhongResponse = await axios.get<DatPhong[]>(`http://localhost:5000/api/datphong/user/${nguoiDungId}`);
          setDatPhongList(datPhongResponse.data);
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, [nguoiDungId]);

  const handleDelete = async (dat_phong_id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn hủy đơn đặt phòng này?")) {
      try {
        await axios.delete(`http://localhost:5000/api/datphong/${dat_phong_id}`);
        setDatPhongList(prevList => prevList.filter(datPhong => datPhong.dat_phong_id !== dat_phong_id));
        alert('Hủy đơn đặt phòng thành công!');
      } catch (error) {
        console.error('Lỗi khi xóa đơn đặt phòng:', error);
        alert('Có lỗi xảy ra khi xóa đơn đặt phòng.');
      }
    }
  };

  return (
    <div className="dat-lich-page">
      <Header />
      <Navbar />
      <div className="content-container" style={{ marginTop: '245px' }}>
        <TaiKhoanMenu />
        <div className="table-container">
          <h1>Danh Sách Đặt Phòng</h1>
          <table className="lich-table">
            <thead>
              <tr>
                <th>Tên Khách Hàng</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Phòng</th>
                <th>Ngày Bắt Đầu</th>
                <th>Ngày Kết Thúc</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {datPhongList.length > 0 ? (
                datPhongList.map((datPhong) => {
                  const room = phongMap.get(datPhong.phong_id); // Lấy thông tin phòng từ map

                  return (
                    <tr key={datPhong.dat_phong_id}>
                      <td>{datPhong.ten_khach_hang}</td>
                      <td>{datPhong.email}</td>
                      <td>{datPhong.sdt}</td>
                      <td>{room || 'Không có thông tin phòng'}</td>
                      <td>{format(parseISO(datPhong.ngay_bat_dau), 'yyyy-MM-dd')}</td>
                      <td>{format(parseISO(datPhong.ngay_ket_thuc), 'yyyy-MM-dd')}</td>
                      <td>
                        <span
                          className="status"
                          style={getStatusStyle(datPhong.ngay_bat_dau, datPhong.ngay_ket_thuc)}
                        >
                          {datPhong.trang_thai}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(datPhong.dat_phong_id)}
                          style={{ color: 'white', cursor: 'pointer' }}
                        >
                          Hủy
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center' }}>
                    Không có đơn đặt phòng nào
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

export default DSDatPhong;
