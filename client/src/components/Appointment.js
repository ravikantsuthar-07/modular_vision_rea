import React from 'react'

const Appointment = () => {
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="section-title">
                                <h6>Appointment</h6>
                                <h2 className="mb-4">
                                    Make An Appointment To Start Your Dream Project
                                </h2>
                            </div>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div
                                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                            style={{width: '65px', height: '65px'}}
                                        >
                                            <i className="fa fa-2x fa-phone-alt txt-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Call Us Now</p>
                                            <h3 className="mb-0">+012 345 6789</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div
                                            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                            style={{width: '65px', height: '65px'}}
                                        >
                                            <i className="fa fa-2x fa-envelope-open txt-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Mail Us Now</p>
                                            <h3 className="mb-0">info@example.com</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form id="appointmentForm">
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            style={{height: '55px'}}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            style={{height: '55px'}}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Mobile"
                                            style={{height: '55px'}}
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <select className="form-select" style={{height: '55px'}} required>
                                            <option value="" disabled selected>Choose Service</option>
                                            <option value="Interior">Interior</option>
                                            <option value="Architecture">Architecture</option>
                                            <option value="Design">Design</option>
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <textarea
                                            className="form-control"
                                            rows="7"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn btn-inline-body w-100 py-3"
                                            id="submitBtn"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Appointment;