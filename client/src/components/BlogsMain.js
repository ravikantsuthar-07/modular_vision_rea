import React from 'react'
import B1 from '../assets/img/carousel-1.jpg';
import B2 from '../assets/img/carousel-2.jpg';
import B3 from '../assets/img/carousel-3.jpg';

const BlogsMain = () => {
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{maxWidth: "700px"}}
                    >
                        <div className="section-title">
                            <h6>Our Blog</h6>
                            <h2 className="mb-4">
                                Discover Insights and Inspiration from Our Latest Articles
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="blog-item d-flex flex-column position-relative h-100">
                                <img
                                    className="img-fluid mb-4"
                                    src={B1}
                                    alt="Blog Image"
                                />
                                <div className="blog-text p-4">
                                    <div className="mb-3">
                                        <span className="badge bg-danger">Design</span>
                                        <span className="ms-3 text-muted">Nov 25, 2024</span>
                                    </div>
                                    <h3 className="mb-3">Modern Architecture Trends</h3>
                                    <p className="mb-4">
                                        Explore the latest innovations in modern architecture,
                                        combining aesthetics and sustainability.
                                    </p>
                                    <a className="btn btn-outline-body" href="blog-details.html">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="blog-item d-flex flex-column position-relative h-100">
                                <img
                                    className="img-fluid mb-4"
                                    src={B2}
                                    alt="Blog Image"
                                />
                                <div className="blog-text p-4">
                                    <div className="mb-3">
                                        <span className="badge bg-danger">Technology</span>
                                        <span className="ms-3 text-muted">Nov 20, 2024</span>
                                    </div>
                                    <h3 className="mb-3">Impact of AI on Interior Design</h3>
                                    <p className="mb-4">
                                        Discover how artificial intelligence is revolutionizing the
                                        interior design industry.
                                    </p>
                                    <a className="btn btn-outline-body" href="blog-details.html">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="blog-item d-flex flex-column position-relative h-100">
                                <img className="img-fluid mb-4" src={B3} alt="Blog Image" />
                                <div className="blog-text p-4">
                                    <div className="mb-3">
                                        <span className="badge bg-danger">Tips</span>
                                        <span className="ms-3 text-muted">Nov 15, 2024</span>
                                    </div>
                                    <h3 className="mb-3">10 Tips for Renovating on a Budget</h3>
                                    <p className="mb-4">
                                        Learn how to renovate your space cost-effectively without
                                        compromising on quality.
                                    </p>
                                    <a className="btn btn-outline-body" href="blog-details.html">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsMain;