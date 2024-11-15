import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BaiVietType {
  bai_viet_id: number;
  tieu_de: string;
  noi_dung: string;
  hinh_anh: string;
  trang_thai: 'đã duyệt' | 'chờ duyệt' | 'hủy';
}

interface BaiViet1UpdateProps {
  selectedBaiViet: BaiVietType | null;
  onUpdateSuccess: () => void; // Callback để làm mới danh sách khi cập nhật thành công
}

const BaiViet1Update: React.FC<BaiViet1UpdateProps> = ({ selectedBaiViet, onUpdateSuccess }) => {
  // Luôn khởi tạo form với giá trị mặc định, dù `selectedBaiViet` có giá trị hay không
  const [formData, setFormData] = useState({
    tieu_de: '',
    noi_dung: '',
    hinh_anh: null as File | null,
  });
  const [message, setMessage] = useState<string | null>(null);

  // Cập nhật form khi `selectedBaiViet` thay đổi
  useEffect(() => {
    if (selectedBaiViet) {
      setFormData({
        tieu_de: selectedBaiViet.tieu_de,
        noi_dung: selectedBaiViet.noi_dung,
        hinh_anh: null,
      });
    }
  }, [selectedBaiViet]);

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

  // Xử lý cập nhật bài viết
  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedBaiViet) return; // Nếu chưa chọn bài viết

    const formDataToSend = new FormData();
    formDataToSend.append('tieu_de', formData.tieu_de);
    formDataToSend.append('noi_dung', formData.noi_dung);

    if (formData.hinh_anh) {
      formDataToSend.append('hinh_anh', formData.hinh_anh);
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/baiviet/${selectedBaiViet.bai_viet_id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setMessage('Bài viết đã được cập nhật thành công!');
        onUpdateSuccess(); // Gọi callback để làm mới danh sách
      } else {
        setMessage('Đã xảy ra lỗi khi cập nhật bài viết.');
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật bài viết:', error);
      setMessage('Đã xảy ra lỗi khi cập nhật bài viết.');
    }

    // Ẩn thông báo sau 3 giây
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Cập nhật bài viết</h2>
        </div>
        <form className="add-user-form" onSubmit={handleUpdateSubmit}>
          <div className="form-group">
            <label htmlFor="tieu_de">Tiêu đề:</label>
            <input
              type="text"
              id="tieu_de"
              name="tieu_de"
              value={formData.tieu_de}
              onChange={handleInputChange}
              placeholder="Nhập tiêu đề bài viết"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="noi_dung">Nội dung:</label>
            <textarea
              id="noi_dung"
              name="noi_dung"
              value={formData.noi_dung}
              onChange={handleInputChange}
              placeholder="Nhập nội dung bài viết"
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
          <button type="submit" className="btn">Cập nhật bài viết</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default BaiViet1Update;
