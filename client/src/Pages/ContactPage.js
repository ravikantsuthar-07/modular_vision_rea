import React, { useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`https://modular-vision-rea-backend.onrender.com/api/v1/appointment/createContact`, {name, email, subject, message}) ;
            if (data?.success) {
                alert(data?.message)
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    return (
        <Layout>
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <Link to={`/`} className="text-white">Home</Link>
                            </li>
                            <li className="breadcrumb-item txt-primary" aria-current="page">
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: "600px" }}
                        >
                            <h1 className="mb-3">Get In Touch</h1>
                            <p>
                                Contact us for any inquiries or assistance. We're here to help!
                            </p>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                        <div
                                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark text-white"
                                            style={{ width: '55px', height: '55px' }}
                                        >
                                            <i className="fa fa-map-marker-alt txt-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Address</p>
                                            <h3 className="mb-0">Man Mandir Road, Near Karni Mata Temple, Khaturia Colony, Bikaner</h3>
                                        </div>
                                    </div>
                                    <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                        <div
                                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark text-white"
                                            style={{ width: '55px', height: '55px' }}
                                        >
                                            <i className="fa fa-phone-alt txt-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Call Us Now</p>
                                            <h3 className="mb-0">+91 90798 67467 <br/>  +91 94146 04749</h3>
                                        </div>
                                    </div>
                                    <div className="bg-light d-flex align-items-center w-100 p-4">
                                        <div
                                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark txt-primary"
                                            style={{ width: '55px', height: '55px' }}
                                        >
                                            <i className="fa fa-envelope-open txt-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Mail Us Now</p>
                                            <h3 className="mb-0">info@modularvisionera.com</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4">
                                    Fill out the form below, and we'll get back to you as soon as
                                    possible.
                                </p>
                                <form id="contactForm" onSubmit={handleSubmit} method='post'>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                onChange={(e) => setName(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    required
                                                />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                onChange={(e) => setSubject(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    required
                                                />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                onChange={(e) => setMessage(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: "100px" }}
                                                    required
                                                ></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-inline-body w-100 py-3"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                title='Modular Vision ERA'
                    className="w-100 mb-n2"
                    style={{ height: "450px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
            </div>
        </Layout>
    )
}

export default ContactPage