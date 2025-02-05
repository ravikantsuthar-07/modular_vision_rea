import React from 'react'
import F1 from '../assets/img/about-2.jpg';
import F2 from '../assets/img/about-1.jpg';

const Features = () => {
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-img">
                                <img className="img-fluid" src={F1} alt="About" />
                                <img className="img-fluid" src={F2} alt="About" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="section-title">
                                <h6>Why Choose Us!</h6>
                                <h2 className="mb-4">
                                    Why You Should Trust Us? Learn More About Us!
                                </h2>
                            </div>
                            <p className="mb-4">
                                We blend creativity with technical expertise, ensuring that
                                every project we take on is a perfect combination of form and
                                function. Our dedicated team is here to turn your vision into
                                reality.
                            </p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex align-items-start">
                                        <i className="fas fa-pencil-alt fa-3x txt-primary"></i>
                                        <div className="ms-4">
                                            <h3>Design Approach</h3>
                                            <p className="mb-0">
                                                We emphasize a client-centered approach, ensuring that
                                                every design reflects your unique vision while balancing
                                                innovation and practicality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-start">
                                        <i className="fas fa-lightbulb fa-3x txt-primary"></i>
                                        <div className="ms-4">
                                            <h3>Innovative Solutions</h3>
                                            <p className="mb-0">
                                                Our team stays at the forefront of trends, delivering
                                                cutting-edge solutions that meet both your needs and the
                                                evolving demands of the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-start">
                                        <i className="fas fa-project-diagram fa-3x txt-primary"></i>
                                        <div className="ms-4">
                                            <h3>Project Management</h3>
                                            <p className="mb-0">
                                                From conception to completion, we manage every aspect of
                                                the project, ensuring timely delivery and exceptional
                                                quality at every stage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;