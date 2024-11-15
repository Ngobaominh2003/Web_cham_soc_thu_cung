import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import TaiKhoanMenu from '../../components/TaiKhoanMenu';
import BaiViet1Update from './BaiViet1Update';

interface BaiVietType {
  bai_viet_id: number;
  tieu_de: string;
  noi_dung: string;
  ngay_tao: string;
  hinh_anh: string;
  trang_thai: 'đã duyệt' | 'chờ duyệt' | 'hủy';
}

const BaiViet1: React.FC = () => {
  const [baiVietList, setBaiVietList] = useState<BaiVietType[]>([]); // Lưu danh sách bài viết
  const nguoiDungId = localStorage.getItem('nguoi_dung_id'); // Lấy ID người dùng từ localStorage
  const [selectedBaiViet, setSelectedBaiViet] = useState<BaiVietType | null>(null); // Lưu bài viết đã chọn

  // Thêm bài viết
  const [formData, setFormData] = useState({
    tieu_de: '',
    noi_dung: '',
    hinh_anh: null as File | null,
  });
  const [message, setMessage] = useState<string | null>(null); // Hiển thị thông báo lỗi/thành công

  // Xử lý thay đổi input text
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý thay đổi file (hình ảnh)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, hinh_anh: e.target.files[0] });
    }
  };

  // Xử lý thêm bài viết
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nguoiDungId) {
      setMessage('Lỗi: Không tìm thấy người dùng ID.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('nguoi_dung_id', nguoiDungId);
    formDataToSend.append('tieu_de', formData.tieu_de);
    formDataToSend.append('noi_dung', formData.noi_dung);
    if (formData.hinh_anh) {
      formDataToSend.append('hinh_anh', formData.hinh_anh);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/baiviet', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setMessage('Bài viết đã được thêm thành công!');
        refreshBaiVietList();
        setFormData({
          tieu_de: '',
          noi_dung: '',
          hinh_anh: null,
        });
      } else {
        setMessage('Đã xảy ra lỗi khi thêm bài viết.');
      }
    } catch (error) {
      console.error('Lỗi khi thêm bài viết:', error);
      setMessage('Đã xảy ra lỗi khi thêm bài viết.');
    }

    setTimeout(() => setMessage(null), 3000);
  };

  // Lấy danh sách bài viết theo người dùng
  useEffect(() => {
    const fetchBaiViet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/baiviet/nguoidung/${nguoiDungId}`);
        setBaiVietList(response.data);
      } catch (error) {
        console.error('Lỗi khi tải bài viết:', error);
      }
    };

    if (nguoiDungId) {
      fetchBaiViet();
    } else {
      console.warn('Người dùng không xác định!');
    }
  }, [nguoiDungId]);

  // Làm mới danh sách bài viết
  const refreshBaiVietList = async () => {
    if (nguoiDungId) {
      const response = await axios.get(`http://localhost:5000/api/baiviet/nguoidung/${nguoiDungId}`);
      setBaiVietList(response.data);
    }
  };

  // Xóa bài viết
  const handleDelete = async (baiVietId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa bài viết này không?');

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/baiviet/${baiVietId}`);
      setBaiVietList(baiVietList.filter(baiViet => baiViet.bai_viet_id !== baiVietId));
      alert('Bài viết đã được xóa thành công.');
    } catch (error) {
      console.error('Lỗi khi xóa bài viết:', error);
      alert('Đã xảy ra lỗi khi xóa bài viết.');
    }
  };

  // Khi nhấn vào một hàng bài viết
  const handleRowClick = (baiViet: BaiVietType) => {
    setSelectedBaiViet(baiViet);
  };

  return (
    <div className="bai-viet-page">
      <Header />
      <Navbar />
      <div className="content-row">
        <TaiKhoanMenu />

        <div className="details1">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Thêm bài viết mới</h2>
            </div>

            {message && (
              <div className="alert alert-success">
                {message}
              </div>
            )}

            <form className="add-user-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="tieu_de">Tiêu đề:</label>
                <input
                  type="text"
                  id="tieu_de"
                  name="tieu_de"
                  placeholder="Nhập tiêu đề bài viết"
                  value={formData.tieu_de}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="noi_dung">Nội dung:</label>
                <textarea
                  id="noi_dung"
                  name="noi_dung"
                  placeholder="Nhập nội dung bài viết"
                  value={formData.noi_dung}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hinh_anh">Hình ảnh:</label>
                <input
                  type="file"
                  id="hinh_anh"
                  name="hinh_anh"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <button type="submit" className="btn">Thêm bài viết</button>
            </form>
          </div>
          <BaiViet1Update selectedBaiViet={selectedBaiViet} onUpdateSuccess={refreshBaiVietList} />
        </div>

        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Bài Viết Chăm Sóc Thú Cưng</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Tiêu đề</th>
                  <th>Nội dung</th>
                  <th>Ngày tạo</th>
                  <th>Hình ảnh</th>
                  <th>Trạng Thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {baiVietList.map((baiViet) => (
                  <tr key={baiViet.bai_viet_id} onClick={() => handleRowClick(baiViet)}>
                    <td>{baiViet.tieu_de}</td>
                    <td>{baiViet.noi_dung}</td>
                    <td>{new Date(baiViet.ngay_tao).toLocaleDateString()}</td>
                    <td>
                      <img src={`http://localhost:5000/img/${baiViet.hinh_anh}`} className="avatar" alt="Hình ảnh" />
                    </td>
                    <td>{baiViet.trang_thai}</td>
                    <td>
                      <button className="delete-btn" onClick={(e) => handleDelete(baiViet.bai_viet_id, e)}>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        

      </div>
    </div>



  );
};

export default BaiViet1;
