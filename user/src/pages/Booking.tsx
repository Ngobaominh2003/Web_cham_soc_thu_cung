import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const Booking: React.FC = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <>
                {/* Services Start */}
                <div className="container-fluid bg-light pt-5">
                    <div className="container py-5">
                        <div className="row pb-3">
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                    <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3" />
                                    <h3 className="mb-3">Pet Boarding</h3>
                                    <p>
                                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                        diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                    </p>
                                    <a className="text-uppercase font-weight-bold" href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                    <h3 className="flaticon-food display-3 font-weight-normal text-secondary mb-3" />
                                    <h3 className="mb-3">Pet Feeding</h3>
                                    <p>
                                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                        diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                    </p>
                                    <a className="text-uppercase font-weight-bold" href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                    <h3 className="flaticon-grooming display-3 font-weight-normal text-secondary mb-3" />
                                    <h3 className="mb-3">Pet Grooming</h3>
                                    <p>
                                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                        diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                    </p>
                                    <a className="text-uppercase font-weight-bold" href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Booking Start */}
                <div className="container-fluid">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="bg-primary py-5 px-4 px-sm-5">
                                    <form className="py-5">
                                        <div className="form-group">
                                            <select
                                                className="custom-select border-0 px-4"
                                                style={{ height: 47 }}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select A Service</option>
                                                <option value={1}>Service 1</option>
                                                <option value={2}>Service 2</option>
                                                <option value={3}>Service 3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="date" id="date" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 p-4 datetimepicker-input"
                                                    placeholder="Reservation Date"
                                                    data-target="#date"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="time" id="time" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 p-4 datetimepicker-input"
                                                    placeholder="Reservation Time"
                                                    data-target="#time"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                className="custom-select border-0 px-4"
                                                style={{ height: 47 }}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select A Service</option>
                                                <option value={1}>Service 1</option>
                                                <option value={2}>Service 2</option>
                                                <option value={3}>Service 3</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-dark btn-block border-0 py-3"
                                                type="submit"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                                <h4 className="text-secondary mb-3">Going for a vacation?</h4>
                                <h1 className="display-4 mb-4">
                                    Book For <span className="text-primary">Your Pet</span>
                                </h1>
                                <p>
                                    Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
                                    dolore takima ipsum lorem rebum
                                </p>
                                <div className="row py-2">
                                    <div className="col-sm-6">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-center mb-2">
                                                <h1 className="flaticon-house font-weight-normal text-secondary m-0 mr-3" />
                                                <h5 className="text-truncate m-0">Pet Boarding</h5>
                                            </div>
                                            <p>
                                                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-center mb-2">
                                                <h1 className="flaticon-food font-weight-normal text-secondary m-0 mr-3" />
                                                <h5 className="text-truncate m-0">Pet Feeding</h5>
                                            </div>
                                            <p>
                                                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-center mb-2">
                                                <h1 className="flaticon-grooming font-weight-normal text-secondary m-0 mr-3" />
                                                <h5 className="text-truncate m-0">Pet Grooming</h5>
                                            </div>
                                            <p className="m-0">
                                                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-center mb-2">
                                                <h1 className="flaticon-toy font-weight-normal text-secondary m-0 mr-3" />
                                                <h5 className="text-truncate m-0">Pet Tranning</h5>
                                            </div>
                                            <p className="m-0">
                                                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Booking Start */}
                {/* Pricing Plan Start */}
                <div className="container-fluid bg-light pt-5 pb-4">
                    <div className="container py-5">
                        <div className="d-flex flex-column text-center mb-5">
                            <h4 className="text-secondary mb-3">Pricing Plan</h4>
                            <h1 className="display-4 m-0">Choose the <span className="text-primary">Best Price</span></h1>
                        </div>
                        <div className="row">
                            {/* Basic Plan */}
                            <div className="col-lg-4 mb-4">
                                <div className="card border-0">
                                    <div className="card-header position-relative border-0 p-0 mb-4">
                                        <img className="card-img-top" src="img/price-1.jpg" alt="" />
                                        <div className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{ top: 0, left: 0, zIndex: 1, background: 'rgba(0, 0, 0, .5)' }}>
                                            <h3 className="text-primary mb-3">Basic</h3>
                                            <h1 className="display-4 text-white mb-0">
                                                <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>49<small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mo</small>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="card-body text-center p-0">
                                        <ul className="list-group list-group-flush mb-4">
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Feeding</li>
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Boarding</li>
                                            <li className="list-group-item p-2"><i className="fa fa-times text-danger mr-2"></i>Spa & Grooming</li>
                                            <li className="list-group-item p-2"><i className="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer border-0 p-0">
                                        <a href="" className="btn btn-primary btn-block p-3" style={{ borderRadius: 0 }}>Signup Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Standard Plan */}
                            <div className="col-lg-4 mb-4">
                                <div className="card border-0">
                                    <div className="card-header position-relative border-0 p-0 mb-4">
                                        <img className="card-img-top" src="img/price-2.jpg" alt="" />
                                        <div className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{ top: 0, left: 0, zIndex: 1, background: 'rgba(0, 0, 0, .5)' }}>
                                            <h3 className="text-secondary mb-3">Standard</h3>
                                            <h1 className="display-4 text-white mb-0">
                                                <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>99<small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mo</small>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="card-body text-center p-0">
                                        <ul className="list-group list-group-flush mb-4">
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Feeding</li>
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Boarding</li>
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Spa & Grooming</li>
                                            <li className="list-group-item p-2"><i className="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer border-0 p-0">
                                        <a href="" className="btn btn-secondary btn-block p-3" style={{ borderRadius: 0 }}>Signup Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Premium Plan */}
                            <div className="col-lg-4 mb-4">
                                <div className="card border-0">
                                    <div className="card-header position-relative border-0 p-0 mb-4">
                                        <img className="card-img-top" src="img/price-3.jpg" alt="" />
                                        <div className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{ top: 0, left: 0, zIndex: 1, background: 'rgba(0, 0, 0, .5)' }}>
                                            <h3 className="text-primary mb-3">Premium</h3>
                                            <h1 className="display-4 text-white mb-0">
                                                <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>149<small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mo</small>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="card-body text-center p-0">
                                        <ul className="list-group list-group-flush mb-4">
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Feeding</li>
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Boarding</li>
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Spa & Grooming</li>
                                            <li className="list-group-item p-2"><i className="fa fa-check text-secondary mr-2"></i>Veterinary Medicine</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer border-0 p-0">
                                        <a href="" className="btn btn-primary btn-block p-3" style={{ borderRadius: 0 }}>Signup Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing Plan End */}
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
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

export default Booking;