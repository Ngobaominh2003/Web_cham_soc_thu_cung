import React, { useState } from 'react';

interface UserFormData {
  username: string;
  email: string;
  password: string;
  sdt: string;
  gender: string;
  avatar: File | null;
}

const AddUser: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    username: '',
    email: '',
    password: '',
    sdt: '',
    gender: '',
    avatar: null,
  });

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
        avatar: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Tạo đối tượng FormData để gửi dữ liệu
    const formDataToSend = new FormData();
    formDataToSend.append('ten_dang_nhap', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mat_khau', formData.password);

    if (formData.sdt) {
      formDataToSend.append('sdt', formData.sdt); // Chỉ gửi số điện thoại nếu có
    }

    if (formData.gender) {
      formDataToSend.append('gioi_tinh', formData.gender); // Chỉ gửi giới tính nếu có
    }

    if (formData.avatar) {
      formDataToSend.append('avatar', formData.avatar); // Chỉ gửi avatar nếu có
    }

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      window.alert('Thêm người dùng thành công!'); // Hiển thị thông báo thành công
      console.log('User added successfully:', data);
    } catch (error) {
      window.alert('Thêm người dùng không thành công!'); // Hiển thị thông báo lỗi
      console.error('Error adding user:', error);
    }
  };
  

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Thêm người dùng</h2>
        </div>
        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên người dùng:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nhập tên người dùng"
              required
              value={formData.username}
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
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
              required
              value={formData.password}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Giới tính:</label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
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

          <button type="submit" className="btn">Thêm người dùng</button>
        </form>

        
      </div>
    </div>
  );
};

export default AddUser;
