import React, { useState } from "react";
import "../pages/css/Booking.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking: React.FC = () => {
  const [price, setPrice] = useState<number>(120000);

  const handleWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const weight = e.target.value;
    switch (weight) {
      case "under5kg":
        setPrice(120000);
        break;
      case "from5to10kg":
        setPrice(150000);
        break;
      case "from10to15kg":
        setPrice(180000);
        break;
      case "dayOnly":
        setPrice(98000);
        break;
      default:
        setPrice(0);
    }
  };

  return (
    <div className="full-page-container">
      {/* Header và Navbar */}
      <Header />
      <Navbar />

      {/* Nội dung chính */}
      <div className="booking-container" style={{ marginTop: "245px", }}>
        <header className="header">
          <h1 className="header-title">
            ĐẶT PHÒNG KHÁCH SẠN CHO THÚ CƯNG TẠI PETLOVE
          </h1>
        </header>

        <div className="main-content">
          <div className="left-section">
            <iframe
              src="https://www.youtube.com/embed/p6UDKjmWp1Y"
              title="Fago Pet Video"
              className="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="thumbnails">
              {Array.from({ length: 4 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail"
                />
              ))}
            </div>
          </div>

          <div className="right-section">
            <div>
              <h2 className="sub-title">Tiện ích</h2>
              <ul className="list">
                <li>Camera theo dõi 24/24</li>
                <li>2-3 bữa mỗi ngày</li>
                <li>Vệ sinh chuồng mỗi ngày</li>
                <li>Vui chơi mỗi ngày 2 lần</li>
                <li>Phòng có điều hòa 24/7</li>
                <li>Cung cấp hình ảnh và video của các bé mỗi ngày</li>
              </ul>
            </div>
            <div>
              <h2 className="sub-title">Ưu đãi</h2>
              <ul className="list">
                <li>3 ngày giảm 10% phí dịch vụ spa và grooming</li>
                <li>7 ngày giảm 5% phí khách sạn và 20% phí spa</li>
                <li>15 ngày giảm 5% phí dịch vụ khách sạn + tặng 1 lần tắm</li>
                <li>30 ngày giảm 5% phí khách sạn + tặng 2 lần tắm + miễn phí đưa đón (&lt;5km)</li>
                <li>Gửi từ 2 bé trở lên giảm 5% phí dịch vụ khách sạn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="booking-form">
          <h1 className="booking-form-title">ĐẶT PHÒNG KHÁCH SẠN CHO CHÓ</h1>
          <div>
            <label htmlFor="weight" className="weight-label">
              Chọn cân nặng:
            </label>
            <select id="weight" onChange={handleWeightChange} className="select">
              <option value="under5kg">Dưới 5kg</option>
              <option value="from5to10kg">Từ 5kg - 10kg</option>
              <option value="from10to15kg">Từ 10kg - 15kg</option>
              <option value="dayOnly">Gửi trong ngày</option>
            </select>
          </div>
          <h2 className="price">
            Giá: <span>{price.toLocaleString()}đ/ngày</span>
          </h2>
          <button className="button">Đặt phòng ngay</button>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;
