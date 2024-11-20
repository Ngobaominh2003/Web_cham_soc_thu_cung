import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
                            <h4 className="text-secondary mb-3">Dịch Vụ Của Chúng Tôi</h4>
                            <h1 className="display-4 m-0">
                                <span className="text-primary">Dịch Vụ</span> Thú Cưng Cao Cấp
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
               <Footer/>
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