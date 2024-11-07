import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

interface ServiceType {
    dich_vu_id: number;
    ten_dich_vu: string;
    mo_ta: string;
    logo: string;
}

const Service: React.FC = () => {
    const [services, setServices] = useState<ServiceType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:5000/api/dichvu');
                if (!response.ok) {
                    throw new Error('Failed to fetch services data');
                }
                const data = await response.json();
                setServices(data.slice(0, 6)); // Display only the first six services
            } catch (error) {
                setError('Error loading services. Please try again later.');
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <>
                {/* Services Start */}
                <div className="container-fluid bg-light pt-5">
                    <div className="container py-5">
                        <div className="d-flex flex-column text-center mb-5">
                            <h4 className="text-secondary mb-3">Our Services</h4>
                            <h1 className="display-4 m-0">
                                <span className="text-primary">Premium</span> Pet Services
                            </h1>
                        </div>
                        <div className="service-list row pb-3">
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                services.map((service) => (
                                    <div key={service.dich_vu_id} className="col-md-6 col-lg-4 mb-4">
                                        <div className="service-block d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                            <h3 className="display-3 font-weight-normal text-secondary mb-3">
                                                <img
                                                    src={`http://localhost:5000/img/${service.logo}`}
                                                    alt={service.ten_dich_vu}
                                                    width="80"
                                                    height="80"
                                                />
                                            </h3>
                                            <h3 className="mb-3">{service.ten_dich_vu}</h3>
                                            <p className="description">
                                                {service.mo_ta || 'No description available'}
                                            </p>
                                            <div className="button-group">
                                                <a className="btn btn-primary text-uppercase font-weight-bold mr-2" href="#">
                                                    Đặt Lịch
                                                </a>
                                                <a className="btn btn-secondary text-uppercase font-weight-bold" href="#">
                                                    Xem Chi Tiết
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </div>
                {/* Services End */}
                {/* Testimonial Start */}
                <div className="container-fluid p-0 py-5">
                    <div className="container p-0 pt-5">
                        <div className="d-flex flex-column text-center mb-5">
                            <h4 className="text-secondary mb-3">Testimonial</h4>
                            <h1 className="display-4 m-0">
                                Our Client <span className="text-primary">Says</span>
                            </h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="bg-light mx-3 p-4">
                                <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                                    <img
                                        className="img-fluid"
                                        src="img/testimonial-1.jpg"
                                        style={{ width: 80, height: 80 }}
                                        alt=""
                                    />
                                    <div className="ml-3">
                                        <h5>Client Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                    eirmod clita lorem. Dolor tempor ipsum sanct clita
                                </p>
                            </div>
                            <div className="bg-light mx-3 p-4">
                                <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                                    <img
                                        className="img-fluid"
                                        src="img/testimonial-2.jpg"
                                        style={{ width: 80, height: 80 }}
                                        alt=""
                                    />
                                    <div className="ml-3">
                                        <h5>Client Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                    eirmod clita lorem. Dolor tempor ipsum sanct clita
                                </p>
                            </div>
                            <div className="bg-light mx-3 p-4">
                                <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                                    <img
                                        className="img-fluid"
                                        src="img/testimonial-3.jpg"
                                        style={{ width: 80, height: 80 }}
                                        alt=""
                                    />
                                    <div className="ml-3">
                                        <h5>Client Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                    eirmod clita lorem. Dolor tempor ipsum sanct clita
                                </p>
                            </div>
                            <div className="bg-light mx-3 p-4">
                                <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                                    <img
                                        className="img-fluid"
                                        src="img/testimonial-4.jpg"
                                        style={{ width: 80, height: 80 }}
                                        alt=""
                                    />
                                    <div className="ml-3">
                                        <h5>Client Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                                <p className="m-0">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                    eirmod clita lorem. Dolor tempor ipsum sanct clita
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
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
                                    <form action="">
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

export default Service;