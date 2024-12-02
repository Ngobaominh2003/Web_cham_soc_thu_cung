import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DatPhongUpdateProps {
  DatPhongChon: {
    dat_phong_id: number;
    nguoi_dung_id: number | null;
    ten_khach_hang: string;
    email: string;
    sdt: string;
    phong_id: number;
    ngay_bat_dau: string;
    ngay_ket_thuc: string;
    can_nang: number | null;
    tien: number;
  } | null;
}

const DatPhongUpdate: React.FC<DatPhongUpdateProps> = ({ DatPhongChon }) => {
  // Initialize form data without 'trang_thai' field
  const [formData, setFormData] = useState({
    ten_khach_hang: '',
    ngay_dat: '',
    so_phong: 0,
    trang_thai: 'chờ xác nhận' as 'đã xác nhận' | 'chờ xác nhận' | 'hủy', // Default value for status
  });

  // Update formData when DatPhongChon changes, excluding 'trang_thai'
  useEffect(() => {
    if (DatPhongChon) {
      setFormData({
        ten_khach_hang: DatPhongChon.ten_khach_hang,
        ngay_dat: DatPhongChon.ngay_bat_dau, // Booking date from DatPhongChon
        so_phong: DatPhongChon.phong_id,    // Room number from DatPhongChon
        trang_thai: 'chờ xác nhận', // Set default status if not present
      });
    }
  }, [DatPhongChon]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, trang_thai: e.target.value as 'đã xác nhận' | 'chờ xác nhận' | 'hủy' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!DatPhongChon) return;

    const formDataToSend = new FormData();
    formDataToSend.append('ten_khach_hang', formData.ten_khach_hang);
    formDataToSend.append('ngay_dat', formData.ngay_dat);
    formDataToSend.append('so_phong', formData.so_phong.toString());
    formDataToSend.append('trang_thai', formData.trang_thai);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/datphong/${DatPhongChon.dat_phong_id}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        alert('Booking updated successfully!');
      } else {
        alert('Error updating booking.');
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Error updating booking. Please try again.');
    }
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Update Booking</h2>
        </div>

        {DatPhongChon ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="ten_khach_hang">Customer Name:</label>
              <input
                type="text"
                id="ten_khach_hang"
                name="ten_khach_hang"
                value={formData.ten_khach_hang}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ngay_dat">Booking Date:</label>
              <input
                type="date"
                id="ngay_dat"
                name="ngay_dat"
                value={formData.ngay_dat}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="so_phong">Room Number:</label>
              <input
                type="number"
                id="so_phong"
                name="so_phong"
                value={formData.so_phong}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="trang_thai">Status:</label>
              <select
                id="trang_thai"
                name="trang_thai"
                value={formData.trang_thai}
                onChange={handleSelectChange}
                required
              >
                <option value="đã xác nhận">Confirmed</option>
                <option value="chờ xác nhận">Pending</option>
                <option value="hủy">Canceled</option>
              </select>
            </div>

            <button type="submit" className="btn-submit">Update Booking</button>
          </form>
        ) : (
          <p>No booking selected for update.</p>
        )}
      </div>
    </div>
  );
};

export default DatPhongUpdate;
