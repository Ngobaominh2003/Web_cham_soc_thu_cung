import React, { useState, useEffect } from 'react';
import '../css/TaiKhoan.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import TaiKhoanMenu from '../../components/TaiKhoanMenu';

const TaiKhoan: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null); // Hiển thị trước ảnh mới chọn
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  useEffect(() => {
    const nguoiDungId = localStorage.getItem('nguoi_dung_id');

    if (nguoiDungId) {
      fetch(`http://localhost:5000/api/users/${nguoiDungId}`)
        .then(response => response.json())
        .then(data => {
          console.log('Dữ liệu người dùng:', data); // Kiểm tra toàn bộ dữ liệu trả về từ API
          setAvatar(data.avata);
          setUsername(data.ten_dang_nhap);
          setEmail(data.email);
          setPhone(data.sdt);
          setGender(data.gioi_tinh);
        })
        .catch(error => {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
        });

    }
  }, []);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
      // Đưa ảnh vào trạng thái để sử dụng sau này khi tải lên server
      setAvatar(file.name);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const nguoiDungId = localStorage.getItem('nguoi_dung_id');

    if (nguoiDungId) {
      // Tạo một đối tượng FormData để gửi dữ liệu
      const formData = new FormData();

      // Chỉ thêm những trường đã thay đổi vào FormData
      if (username) formData.append('ten_dang_nhap', username);
      if (email) formData.append('email', email);
      if (phone) formData.append('sdt', phone);
      if (gender) formData.append('gioi_tinh', gender);

      // Kiểm tra và thêm file ảnh vào FormData
      if (previewAvatar) {
        const fileInput = document.querySelector('.choose-image-input') as HTMLInputElement;
        if (fileInput && fileInput.files && fileInput.files[0]) {
          formData.append('avatar', fileInput.files[0]);
        }
      }

      // Gửi yêu cầu PUT với FormData
      fetch(`http://localhost:5000/api/users/${nguoiDungId}`, {
        method: 'PUT',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Cập nhật thành công:', data);
          alert('Thông tin đã được cập nhật thành công');
        })
        .catch(error => {
          console.error('Lỗi khi cập nhật thông tin:', error);
          alert('Có lỗi xảy ra khi cập nhật thông tin');
        });
    }
  };


  return (
    <div className="tai-khoan-page">
  <Header />
  <Navbar />
  <div className="profile-container"style={{marginTop: "245px",}}>
    <TaiKhoanMenu />
    <div className="profile-content">
      <h2>Hồ Sơ Của Tôi</h2>
      <h2>Quản lý thông tin hồ sơ để bảo mật tài khoản</h2>

      <div className="profile-main">
        <div className="profile-right">
          <form className="profile-form" onSubmit={handleSave}>
            <div className="profile-image-section">
              <div className="profile-image">
                <img
                  src={avatar ? `http://localhost:5000/img/${avatar}` : '/img/icon_tk.png'}
                  alt="Avatar"
                  className="avatar"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="choose-image-input"
                />
                <p className="image-note">Dung lượng file tối đa 1 MB<br />Định dạng: JPEG, PNG</p>
              </div>
            </div>

            <div className="form-group">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group gender-group">
              <label>Giới tính</label>
              <div className="gender-options">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="nam"
                  checked={gender === 'nam'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male">Nam</label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="nu"
                  checked={gender === 'nu'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">Nữ</label>

                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="khac"
                  checked={gender === 'khac'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="other">Khác</label>
              </div>
            </div>

            <button type="submit" className="save-button">Lưu</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default TaiKhoan;
