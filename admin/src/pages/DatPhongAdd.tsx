import React, { useState } from 'react';
import axios from 'axios';

const DatPhongAdd: React.FC = () => {
  const [formData, setFormData] = useState({
    nguoi_dung_id: '',
    ten_khach_hang: '',
    email: '',
    sdt: '',
    phong_id: '',
    ngay_bat_dau: '',
    ngay_ket_thuc: '',
    can_nang: '',
    tien: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Khởi tạo FormData để gửi dữ liệu
    const formDataToSend = new FormData();
    formDataToSend.append('nguoi_dung_id', formData.nguoi_dung_id);
    formDataToSend.append('ten_khach_hang', formData.ten_khach_hang);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('sdt', formData.sdt);
    formDataToSend.append('phong_id', formData.phong_id);
    formDataToSend.append('ngay_bat_dau', formData.ngay_bat_dau);
    formDataToSend.append('ngay_ket_thuc', formData.ngay_ket_thuc);
    formDataToSend.append('can_nang', formData.can_nang);
    formDataToSend.append('tien', formData.tien);

    try {
      const response = await axios.post('http://localhost:5000/api/DatPhong', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Đơn đặt phòng đã được thêm thành công!');
      } else {
        alert('Đã xảy ra lỗi khi thêm đơn đặt phòng.');
      }
    } catch (error) {
      console.error('Lỗi khi thêm đơn đặt phòng:', error);
      alert('Đã xảy ra lỗi khi thêm đơn đặt phòng.');
    }
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Thêm đơn đặt phòng mới</h2>
        </div>

        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nguoi_dung_id">Người dùng ID:</label>
            <input
              type="text"
              id="nguoi_dung_id"
              name="nguoi_dung_id"
              placeholder="Nhập ID người dùng"
              value={formData.nguoi_dung_id}
              onChange={handleInputChange}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="ten_khach_hang">Tên khách hàng:</label>
            <input
              type="text"
              id="ten_khach_hang"
              name="ten_khach_hang"
              placeholder="Nhập tên khách hàng"
              value={formData.ten_khach_hang}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email khách hàng"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sdt">Số điện thoại:</label>
            <input
              type="text"
              id="sdt"
              name="sdt"
              placeholder="Nhập số điện thoại"
              value={formData.sdt}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phong_id">ID phòng:</label>
            <input
              type="text"
              id="phong_id"
              name="phong_id"
              placeholder="Nhập ID phòng"
              value={formData.phong_id}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ngay_bat_dau">Ngày bắt đầu:</label>
            <input
              type="date"
              id="ngay_bat_dau"
              name="ngay_bat_dau"
              value={formData.ngay_bat_dau}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ngay_ket_thuc">Ngày kết thúc:</label>
            <input
              type="date"
              id="ngay_ket_thuc"
              name="ngay_ket_thuc"
              value={formData.ngay_ket_thuc}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="can_nang">Cân nặng (kg):</label>
            <input
              type="number"
              id="can_nang"
              name="can_nang"
              value={formData.can_nang}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tien">Tiền (VND):</label>
            <input
              type="number"
              id="tien"
              name="tien"
              value={formData.tien}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn">Thêm đơn đặt phòng</button>
        </form>
      </div>
    </div>
  );
};

export default DatPhongAdd;
