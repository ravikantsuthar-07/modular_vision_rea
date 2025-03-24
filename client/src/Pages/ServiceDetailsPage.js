import React, { useEffect, useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ServiceDetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const [service, setService] = useState([]);
    const [project, setProject] = useState([]);
    const getSingleService = async (id) => {
        const { data } = await axios.get(`/api/v1/service/getSingle/${id}`);
        if (data?.success) {
            setService(data?.results[0])
        }
    }
const getProject = async (id) => {
    try {
        const {data} = await axios.get(`/api/v1/project/getByServiceId/${id}`);
        if (data?.success) {
            setProject(data?.results)
        }
    } catch (error) {
        alert(error?.responce?.data?.message);
    }
}
    useEffect(() => {
        getSingleService(id);
        getProject(id)
    }, [id]);
    return (
        <Layout>

            <div
                data-wow-delay="0.1s"
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Services Detail</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <Link to={'/'} className="text-white" >Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={'/services'} className="text-white" >Service</Link>
                            </li>
                            <li className="breadcrumb-item txt-primary" aria-current="page">
                                # {id}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h1 className="display-4 fw-bold">{service.heading}</h1>
                                <p className="text-muted">
                                    {service.subHeading}
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-image mb-4">
                                    <img
                                        // width={'100%'}
                                        height={'20pc'}
                                        src={`/static/services/${service.image}`}
                                        className="img-fluid rounded-3"
                                        alt="Interior Design"
                                    />
                                </div>

                                <div className="service-overview mb-5">
                                    <h2 className="mb-4">Our Approach to Interior Design</h2>
                                    <p>
                                        {service.Decs1}
                                    </p>
                                    <p>
                                        {service.Decs2}
                                    </p>
                                </div>

                                <div className="key-features">
                                    <h3 className="mb-4">Why Choose Us?</h3>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fa fa-star text-warning me-3"></i>
                                            <span>Bespoke Designs Tailored to Your Style</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fa fa-star text-warning me-3"></i>
                                            <span>Luxury Materials and Finishes</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fa fa-star text-warning me-3"></i>
                                            <span>Expert Team of Designers and Architects</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="fa fa-star text-warning me-3"></i>
                                            <span>End-to-End Project Management</span>
                                        </li>
                                    </ul>
                                </div>

                                {}
                                <div className="portfolio-showcase mt-5">
                                    <h3 className="mb-4">Our Recent Projects</h3>
                                    <div className="row g-3">
                                        {project.map((p, i) => (

                                            <div className="col-md-6">
                                                <img
                                                    src={p.image}
                                                    className="img-fluid rounded-3"
                                                    alt="Project 1"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* <div className="testimonials mt-5">
                                    <h3 className="mb-4">What Our Clients Say</h3>
                                    <div className="testimonial-item mb-4">
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="img/testimonial-1.jpg"
                                                className="rounded-circle me-3"
                                                width="60"
                                                alt="Client"
                                            />
                                            <div>
                                                <strong>Jane Doe</strong>
                                                <p className="text-muted">Luxury Apartment Owner</p>
                                                <p className="mt-2">
                                                    "The team transformed our space into a dream home. Every
                                                    detail was thoughtfully designed, and the results
                                                    exceeded our expectations."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="img/testimonial-2.jpg"
                                                className="rounded-circle me-3"
                                                width="60"
                                                alt="Client"
                                            />
                                            <div>
                                                <strong>John Smith</strong>
                                                <p className="text-muted">Villa Owner</p>
                                                <p className="mt-2">
                                                    "Their expertise and attention to detail made the entire
                                                    process stress-free and enjoyable. Highly recommended!"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="cta mt-5">
                                    <h3 className="mb-4">Ready to Transform Your Space?</h3>
                                    <p>
                                        Contact us today to start your journey towards a beautifully
                                        designed interior.
                                    </p>
                                    <Link to={`/contact`} className="btn btn-inline-body btn-lg"
                                    >Get in Touch</Link>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="sidebar bg-light p-4 rounded-3">
                                    <h4 className="mb-4">Related Services</h4>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <a href="service-details.html" className="text-dark"
                                            >Residential Interior Design</a
                                            >
                                        </li>
                                        <li className="mb-3">
                                            <a href="service-details.html" className="text-dark"
                                            >Commercial Interior Design</a
                                            >
                                        </li>
                                        <li className="mb-3">
                                            <a href="service-details.html" className="text-dark"
                                            >Furniture Design</a
                                            >
                                        </li>
                                        <li className="mb-3">
                                            <a href="service-details.html" className="text-dark"
                                            >Lighting Design</a
                                            >
                                        </li>
                                    </ul>

                                    <div className="mt-4">
                                        <h4 className="mb-4">Quick Contact</h4>
                                        <p className="text-muted">
                                            Email: info@example.com<br />
                                            Phone: +123 456 7890
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default ServiceDetailsPage