import React from 'react';
import Navigation from '../components/Navigation';
import DieuKhien from '../components/DieuKhien';

const HoaDon: React.FC = () => (
  <div>
    <Navigation />
    <div className="main">
      <DieuKhien />

      {/* ================ Invoice List ================= */}
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Hóa Đơn Thanh Toán</h2>
            <a href="#" className="btn">Xem Tất Cả</a>
          </div>

          <table>
            <thead>
              <tr>
                <th>Tên khách hàng</th>
                <th>Dịch vụ</th>
                <th>Tổng tiền</th>
                <th>Ngày thanh toán</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyễn Văn A</td>
                <td>Tắm và Cắt Tỉa Lông</td>
                <td>500,000 VND</td>
                <td>2024-10-15</td>
                <td><span className="status completed">Đã thanh toán</span></td>
                <td>
                  <button className="delete-btn">Xóa</button>
                </td>
              </tr>

              <tr>
                <td>Trần Thị B</td>
                <td>Khám Sức Khỏe</td>
                <td>300,000 VND</td>
                <td>2024-10-18</td>
                <td><span className="status cancelled">Chưa thanh toán</span></td>
                <td>
                  <button className="delete-btn">Xóa</button>
                </td>
              </tr>

              <tr>
                <td>Phạm Văn C</td>
                <td>Chích Ngừa</td>
                <td>200,000 VND</td>
                <td>2024-10-20</td>
                <td><span className="status completed">Đã thanh toán</span></td>
                <td>
                  <button className="delete-btn">Xóa</button>
                </td>
              </tr>

              <tr>
                <td>Lê Thị D</td>
                <td>Cắt Móng</td>
                <td>100,000 VND</td>
                <td>2024-10-22</td>
                
                <td><span className="status cancelled">Chưa thanh toán</span></td>
                <td>
                  <button className="delete-btn">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default HoaDon;
