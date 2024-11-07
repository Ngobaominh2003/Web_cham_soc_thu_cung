import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const About: React.FC = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <>
                {/* About Start */}
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                            <h4 className="text-secondary mb-3">Về Chúng Tôi</h4>
                            <h1 className="display-4 mb-4">
                                <span className="text-primary">Lưu Trú</span> &amp;{" "}
                                <span className="text-secondary">Chăm Sóc Ban Ngày</span>
                            </h1>
                            <h5 className="text-muted mb-3">
                                Luôn đồng hành và tận tâm. Sẵn sàng đáp ứng mọi nhu cầu. Dịch vụ tốt nhất cho thú cưng của bạn.
                            </h5>
                            <p className="mb-4">
                                Chúng tôi cam kết mang đến cho thú cưng của bạn sự thoải mái và vui vẻ nhất. Dịch vụ của chúng tôi
                                luôn an toàn, chu đáo và chuyên nghiệp. Chúng tôi hiểu rằng thú cưng là một thành viên trong gia đình của bạn.
                            </p>
                            <ul className="list-inline">
                                <li>
                                    <h5>
                                        <i className="fa fa-check-double text-secondary mr-3" />
                                        Tốt Nhất Trong Ngành
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <i className="fa fa-check-double text-secondary mr-3" />
                                        Dịch Vụ Khẩn Cấp
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <i className="fa fa-check-double text-secondary mr-3" />
                                        Hỗ Trợ Khách Hàng 24/7
                                    </h5>
                                </li>
                            </ul>
                            <a href="" className="btn btn-lg btn-primary mt-3 px-4">
                                Tìm Hiểu Thêm
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <div className="row px-3">
                                <div className="col-12 p-0">
                                    <img className="img-fluid w-100" src="img/about-1.jpg" alt="" />
                                </div>
                                <div className="col-6 p-0">
                                    <img className="img-fluid w-100" src="img/about-2.jpg" alt="" />
                                </div>
                                <div className="col-6 p-0">
                                    <img className="img-fluid w-100" src="img/about-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About End */}
                {/* Features Start */}
                <div className="container-fluid bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
                            </div>
                            <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                                <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                                <h1 className="display-4 mb-4">
                                    <span className="text-primary">Special Care</span> On Pets
                                </h1>
                                <p className="mb-4">
                                    Dolor lorem lorem ipsum sit et ipsum. Sadip sea amet diam sed ut
                                    vero no sit. Et elitr stet sed sit sed kasd. Erat duo eos et erat
                                    sed diam duo
                                </p>
                                <div className="row py-2">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center mb-4">
                                            <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3" />
                                            <h5 className="text-truncate m-0">Best In Industry</h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center mb-4">
                                            <h1 className="flaticon-doctor font-weight-normal text-secondary m-0 mr-3" />
                                            <h5 className="text-truncate m-0">Emergency Services</h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <h1 className="flaticon-care font-weight-normal text-secondary m-0 mr-3" />
                                            <h5 className="text-truncate m-0">Special Care</h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <h1 className="flaticon-dog font-weight-normal text-secondary m-0 mr-3" />
                                            <h5 className="text-truncate m-0">Customer Support</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features End */}
                {/* Team Start */}
                <div className="container mt-5 pt-5 pb-3">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-secondary mb-3">Team Member</h4>
                        <h1 className="display-4 m-0">
                            Meet Our <span className="text-primary">Team Member</span>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-4">
                                <img className="card-img-top" src="img/team-1.jpg" alt="" />
                                <div className="card-body text-center p-0">
                                    <div className="team-text d-flex flex-column justify-content-center bg-light">
                                        <h5>Mollie Ross</h5>
                                        <i>Founder &amp; CEO</i>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-4">
                                <img className="card-img-top" src="img/team-2.jpg" alt="" />
                                <div className="card-body text-center p-0">
                                    <div className="team-text d-flex flex-column justify-content-center bg-light">
                                        <h5>Jennifer Page</h5>
                                        <i>Chef Executive</i>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-4">
                                <img className="card-img-top" src="img/team-3.jpg" alt="" />
                                <div className="card-body text-center p-0">
                                    <div className="team-text d-flex flex-column justify-content-center bg-light">
                                        <h5>Kate Glover</h5>
                                        <i>Doctor</i>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-4">
                                <img className="card-img-top" src="img/team-4.jpg" alt="" />
                                <div className="card-body text-center p-0">
                                    <div className="team-text d-flex flex-column justify-content-center bg-light">
                                        <h5>Lilly Fry</h5>
                                        <i>Trainer</i>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            className="btn btn-outline-primary rounded-circle text-center px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
                    <div className="row pt-5">
                        <div className="col-lg-4 col-md-12 mb-5">
                            <h1 className="mb-3 display-5 text-capitalize text-white">
                                <span className="text-primary">Pet</span>Lover
                            </h1>
                            <p className="m-0">
                                Ipsum amet sed vero et lorem stet eos ut, labore sed sed stet sea est
                                ipsum ut. Volup amet ea sanct ipsum, dolore vero lorem no duo eirmod.
                                Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem ea lorem
                                sed, amet stet sit sea ea diam tempor kasd kasd. Diam nonumy etsit
                                tempor ut sed diam sed et ea
                            </p>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <h5 className="text-primary mb-4">Get In Touch</h5>
                                    <p>
                                        <i className="fa fa-map-marker-alt mr-2" />
                                        123 Street, New York, USA
                                    </p>
                                    <p>
                                        <i className="fa fa-phone-alt mr-2" />
                                        +012 345 67890
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope mr-2" />
                                        info@example.com
                                    </p>
                                    <div className="d-flex justify-content-start mt-4">
                                        <a
                                            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                            style={{ width: 36, height: 36 }}
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <h5 className="text-primary mb-4">Popular Links</h5>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#">
                                            <i className="fa fa-angle-right mr-2" />
                                            Home
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="fa fa-angle-right mr-2" />
                                            About Us
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="fa fa-angle-right mr-2" />
                                            Our Services
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="fa fa-angle-right mr-2" />
                                            Our Team
                                        </a>
                                        <a className="text-white" href="#">
                                            <i className="fa fa-angle-right mr-2" />
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <h5 className="text-primary mb-4">Newsletter</h5>
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control border-0"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-lg btn-primary btn-block border-0"
                                                type="submit"
                                            >
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid text-white py-4 px-sm-3 px-md-5"
                    style={{ background: "#111111" }}
                >
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p className="m-0 text-white">
                                ©{" "}
                                <a className="text-white font-weight-bold" href="#">
                                    Your Site Name
                                </a>
                                . All Rights Reserved. Designed by
                                <a
                                    className="text-white font-weight-bold"
                                    href="https://htmlcodex.com"
                                >
                                    HTML Codex
                                </a>
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <ul className="nav d-inline-flex">
                                <li className="nav-item">
                                    <a className="nav-link text-white py-0" href="#">
                                        Privacy
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white py-0" href="#">
                                        Terms
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white py-0" href="#">
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white py-0" href="#">
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary back-to-top">
                    <i className="fa fa-angle-double-up" />
                </a>
                {/* JavaScript Libraries */}
                {/* Contact Javascript File */}
                {/* Template Javascript */}
            </>


        </div>
    );
};

export default About;