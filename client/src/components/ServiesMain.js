import React from 'react'

const ServiesMain = () => {
    return (
        <>
            <section>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{maxWidth: "700px"}}
                        >
                            <div className="section-title">
                                <h6>Our Services</h6>
                                <h2 className="mb-4">
                                    We Focus On Modern Architecture And Interior Design
                                </h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src="img/service-1.jpg" alt="Service" />
                                    <div className="service-text p-5">
                                        <i className="fas fa-building mb-4 fa-4x"></i>
                                        <h3 className="mb-3">Architecture</h3>
                                        <p className="mb-4">
                                            We provide innovative architectural solutions that bring
                                            your visions to life, blending creativity and functionality.
                                        </p>
                                        <a className="btn" href="service.html">
                                            <i className="fa fa-plus me-3"></i>Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src="img/service-2.jpg" alt="Service" />
                                    <div className="service-text p-5">
                                        <i className="fas fa-cogs mb-4 fa-4x"></i>
                                        <h3 className="mb-3">3D Animation</h3>
                                        <p className="mb-4">
                                            Our 3D animation services offer realistic visualizations to
                                            bring your designs to life, aiding in decision-making and
                                            project presentation.
                                        </p>
                                        <a className="btn" href="service.html">
                                            <i className="fa fa-plus me-3"></i>Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src="img/service-3.jpg" alt="Service" />
                                    <div className="service-text p-5">
                                        <i className="fas fa-home mb-4 fa-4x"></i>
                                        <h3 className="mb-3">House Planning</h3>
                                        <p className="mb-4">
                                            We specialize in creating practical and aesthetically
                                            pleasing house plans that optimize space and functionality
                                            for your lifestyle.
                                        </p>
                                        <a className="btn" href="service.html">
                                            <i className="fa fa-plus me-3"></i>Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src="img/service-4.jpg" alt="Service" />
                                    <div className="service-text p-5">
                                        <i className="fas fa-paint-brush mb-4 fa-4x"></i>
                                        <h3 className="mb-3">Interior Design</h3>
                                        <p className="mb-4">
                                            Transform your living or working spaces with our interior
                                            design services that combine style and practicality for a
                                            lasting impact.
                                        </p>
                                        <a className="btn" href="service.html">
                                            <i className="fa fa-plus me-3"></i>Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src="img/service-5.jpg" alt="Service" />
                                    <div className="service-text p-5">
                                        <i className="fas fa-tools mb-4 fa-4x"></i>
                                        <h3 className="mb-3">Renovation</h3>
                                        <p className="mb-4">
                                            Our renovation services revitalize and refresh existing
                                            spaces, improving both aesthetics and functionality to meet
                                            modern needs.
                                        </p>
                                        <a className="btn" href="service.html">
                                            <i className="fa fa-plus me-3"></i>Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src="img/service-6.jpg" alt="Service" />
                                    <div className="service-text p-5">
                                        <i className="fas fa-hammer mb-4 fa-4x"></i>
                                        <h3 className="mb-3">Construction</h3>
                                        <p className="mb-4">
                                            From ground-up construction to small-scale projects, we
                                            offer expert construction services to bring your plans into
                                            reality.
                                        </p>
                                        <a className="btn" href="service.html">
                                            <i className="fa fa-plus me-3"></i>Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiesMain;