import React, { useState, useEffect } from 'react';

interface User {
  nguoi_dung_id: number;
  ten_dang_nhap: string;
  email: string;
  mat_khau: string;
  gioi_tinh?: 'nam' | 'nu' | 'khac';
  vai_tro?: 'quan_tri' | 'nhan_vien' | 'nguoi_dung' | 'cong_tac_vien';
  sdt?: string;
  avata?: string | File;
}

interface UpdateUserProps {
  user: User | null;
}

const UpdateUser: React.FC<UpdateUserProps> = ({ user }) => {
  const [formData, setFormData] = useState<User>({
    nguoi_dung_id: 0,
    ten_dang_nhap: '',
    email: '',
    mat_khau: '',
    gioi_tinh: undefined,
    vai_tro: undefined,
    sdt: '',
    avata: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nguoi_dung_id: user.nguoi_dung_id,
        ten_dang_nhap: user.ten_dang_nhap,
        email: user.email,
        mat_khau: '',
        gioi_tinh: user.gioi_tinh || undefined,
        vai_tro: user.vai_tro || undefined,
        sdt: user.sdt || '',
        avata: user.avata || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        avata: e.target.files[0], // Store the File object itself
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('nguoi_dung_id', String(formData.nguoi_dung_id));

    // Add only fields that have changed or are not empty
    if (formData.ten_dang_nhap) formDataToSend.append('ten_dang_nhap', formData.ten_dang_nhap);
    if (formData.email) formDataToSend.append('email', formData.email);
    if (formData.mat_khau) formDataToSend.append('mat_khau', formData.mat_khau);
    if (formData.gioi_tinh) formDataToSend.append('gioi_tinh', formData.gioi_tinh);
    if (formData.vai_tro) formDataToSend.append('vai_tro', formData.vai_tro);
    if (formData.sdt) formDataToSend.append('sdt', formData.sdt);
    if (formData.avata instanceof File) {
      formDataToSend.append('avatar', formData.avata); // Append the file itself
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users/${formData.nguoi_dung_id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Cập nhật thất bại!');
      }

      alert('Cập nhật thông tin người dùng thành công!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Lỗi khi cập nhật thông tin người dùng!');
    }
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Cập nhật người dùng: ID: {user?.nguoi_dung_id}</h2>
        </div>

        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ten_dang_nhap">Tên người dùng:</label>
            <input
              type="text"
              id="ten_dang_nhap"
              name="ten_dang_nhap"
              placeholder="Nhập tên người dùng"
              required
              value={formData.ten_dang_nhap}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mat_khau">Mật khẩu:</label>
            <input
              type="password"
              id="mat_khau"
              name="mat_khau"
              placeholder="Nhập mật khẩu"
              value={formData.mat_khau}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gioi_tinh">Giới tính:</label>
            <select
              id="gioi_tinh"
              name="gioi_tinh"
              value={formData.gioi_tinh || ''}
              onChange={handleChange}
            >
              <option value="">Chọn giới tính</option>
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
              <option value="khac">Khác</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="vai_tro">Vai trò:</label>
            <select
              id="vai_tro"
              name="vai_tro"
              value={formData.vai_tro || ''}
              onChange={handleChange}
            >
              <option value="">Chọn vai trò</option>
              <option value="quan_tri">Quản trị</option>
              <option value="nhan_vien">Nhân viên</option>
              <option value="nguoi_dung">Người dùng</option>
              <option value="cong_tac_vien">Cộng tác viên</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sdt">Số điện thoại:</label>
            <input
              type="text"
              id="sdt"
              name="sdt"
              placeholder="Nhập số điện thoại"
              value={formData.sdt || ''}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="btn">Cập nhật người dùng</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
