function Footer() {
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
                                Nanointory is a sleek interior design theme that blends
                                creativity and functionality to transform spaces into stunning
                                designs. Tailored for your unique needs, it’s where innovation
                                meets elegance.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h3 className="text-light mb-4">Services</h3>
                            <a className="btn btn-link" href="">Architecture</a>
                            <a className="btn btn-link" href="">3D Animation</a>
                            <a className="btn btn-link" href="">House Planning</a>
                            <a className="btn btn-link" href="">Interior Design</a>
                            <a className="btn btn-link" href="">Construction</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-light mb-4">Quick Links</h3>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-light mb-4">Address</h3>
                            <p className="mb-2 text-light">
                                <i className="fa fa-map-marker-alt txt-primary me-3"></i>123 Street,
                                New York, USA
                            </p>
                            <p className="mb-2 text-light">
                                <i className="fa fa-phone-alt txt-primary me-3"></i>+012 345 67890
                            </p>
                            <p className="mb-2 text-light">
                                <i className="fa fa-envelope txt-primary me-3"></i>info@example.com
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
                                &copy; <a href="#">2025 Nanointory</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-light text-md-end">
                                Designed By <a href="#">Ravikant Suthar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Footer;