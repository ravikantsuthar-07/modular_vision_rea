import React from 'react'
import Layout from '../components/Lauouts/Layout'

const ContactPage = () => {
    return (
        <Layout>
            <div
                class="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div class="container py-5">
                    <h1 class="display-1 text-white animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase mb-0">
                            <li class="breadcrumb-item">
                                <a class="text-white" href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item txt-primary" aria-current="page">
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div
                            class="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: "600px" }}
                        >
                            <h1 class="mb-3">Get In Touch</h1>
                            <p>
                                Contact us for any inquiries or assistance. We're here to help!
                            </p>
                        </div>
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                        <div
                                            class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark text-white"
                                            style={{ width: '55px', height: '55px' }}
                                        >
                                            <i class="fa fa-map-marker-alt txt-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Address</p>
                                            <h3 class="mb-0">123 Street, New York, USA</h3>
                                        </div>
                                    </div>
                                    <div class="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                        <div
                                            class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark text-white"
                                            style={{ width: '55px', height: '55px' }}
                                        >
                                            <i class="fa fa-phone-alt txt-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Call Us Now</p>
                                            <h3 class="mb-0">+012 345 6789</h3>
                                        </div>
                                    </div>
                                    <div class="bg-light d-flex align-items-center w-100 p-4">
                                        <div
                                            class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark txt-primary"
                                            style={{ width: '55px', height: '55px' }}
                                        >
                                            <i class="fa fa-envelope-open txt-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Mail Us Now</p>
                                            <h3 class="mb-0">info@example.com</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <p class="mb-4">
                                    Fill out the form below, and we'll get back to you as soon as
                                    possible.
                                </p>
                                <form id="contactForm">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    required
                                                />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    required
                                                />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea
                                                    class="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: "100px" }}
                                                    required
                                                ></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button
                                                class="btn btn-inline-body w-100 py-3"
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

            <div class="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                    class="w-100 mb-n2"
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