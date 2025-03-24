import { Link } from 'react-router-dom';import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Footer() {
        const [service, setService] = useState([]);
        const getService = async () => {
            try {
                const { data } = await axios.get(`/api/v1/service/getLast`);
                if (data?.success) {
                    setService(data?.results);
                }
            } catch (error) {
                alert(error?.responce?.data?.message);
            }
        }
        useEffect(() => {
            getService();
        }, [])
    return (
        <section>
            <div
                className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row footer-content">
                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-light mb-4">About Us</h3>
                            <p className="mb-2 text-light">
                                Modular Vision ERA is a sleek interior design theme that blends
                                creativity and functionality to transform spaces into stunning
                                designs. Tailored for your unique needs, it’s where innovation
                                meets elegance.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h3 className="text-light mb-4">Services</h3>
                            {service.map((s,i) => (
                            <Link className="btn btn-link" to={`/service/${s.id}`}>{s.name}</Link>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-light mb-4">Quick Links</h3>
                            <Link className="btn btn-link" to={`/about`}>About Us</Link>
                            <Link className="btn btn-link" to={`/contact`}>Contact Us</Link>
                            <Link className="btn btn-link" to={`/services`}>Our Services</Link>
                            <Link className="btn btn-link" to={`/`}>Terms & Condition</Link>
                            <Link className="btn btn-link" to={`/`}>Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-light mb-4">Address</h3>
                            <p className="mb-2 text-light">
                                <i className="fa fa-map-marker-alt txt-primary me-3"></i>
                                Man Mandir Road, Near Karni Mata Temple, Khaturia Colony, Bikaner 
                            </p>
                            <p className="mb-2 text-light">
                                <i className="fa fa-phone-alt txt-primary me-3"></i>+91 90798 67467
                            </p>
                            <p className="mb-2 text-light">
                                <i className="fa fa-phone-alt txt-primary me-3"></i>+91 94146 04749
                            </p>
                            <p className="mb-2 text-light">
                                <i className="fa fa-envelope txt-primary me-3"></i>info@modularvisionera.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-body me-1" href=""
                                ><i className="fab fa-facebook-f"></i
                                ></a>
                                <a className="btn btn-square btn-outline-body me-1" href=""
                                ><i className="fab fa-youtube"></i
                                ></a>
                                <a className="btn btn-sm-square btn-outline-body me-1" href="">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a className="btn btn-square btn-outline-body me-0" href=""
                                ><i className="fab fa-linkedin-in"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-light"
                            >
                                &copy; <Link to={`/`}> 2025 Modular Mision ERA</Link>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-light text-md-end">
                                Designed By <Link to="/">Ravikant Suthar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Footer;