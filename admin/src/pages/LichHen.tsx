import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import DieuKhien from '../components/DieuKhien';
import axios from 'axios';

const LichHen: React.FC = () => (
  <div>
    <Navigation />
    <div className="main">
      <DieuKhien />

      {/* ================ Booking Details List ================= */}
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
                <th>Dịch vụ</th>
                <th>Thú cưng</th>
                <th>Ngày đặt</th>
                <th>Giờ đặt</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyễn Văn A</td>
                <td>Tắm và cắt tỉa lông</td>
                <td>Chó</td>
                <td>2024-10-15</td>
                <td>10:00 AM</td>
                <td><span className="status confirmed">Đã xác nhận</span></td>
                <td>2024-10-01</td>
              </tr>

              <tr>
                <td>Trần Thị B</td>
                <td>Khám sức khỏe</td>
                <td>Mèo</td>
                <td>2024-10-18</td>
                <td>02:30 PM</td>
                <td><span className="status pending">Chờ xác nhận</span></td>
                <td>2024-10-03</td>
              </tr>

              <tr>
                <td>Phạm Văn C</td>
                <td>Chích ngừa</td>
                <td>Thỏ</td>
                <td>2024-10-20</td>
                <td>09:00 AM</td>
                <td><span className="status completed">Hoàn thành</span></td>
                <td>2024-10-05</td>
              </tr>

              <tr>
                <td>Lê Thị D</td>
                <td>Cắt móng</td>
                <td>Chó</td>
                <td>2024-10-22</td>
                <td>01:00 PM</td>
                <td><span className="status cancelled">Đã hủy</span></td>
                <td>2024-10-07</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default LichHen;
