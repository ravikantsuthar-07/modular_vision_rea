import React from 'react'

const Testimonial = () => {
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{maxWidth: "600px"}}
                    >
                        <div className="section-title">
                            <h6>Testimonial</h6>
                            <h2 className="mb-4">
                                Thousands Of Customers Who Trust Us And Our Services
                            </h2>
                        </div>
                    </div>
                    <div
                        className="owl-carousel testimonial-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div
                            className="testimonial-item text-center"
                            data-dot="<img className='img-fluid' src='img/testimonial-1.jpg' alt=''>"
                        >
                            <p className="fs-5">
                                "Working with this team was a game-changer for our project.
                                Their attention to detail and creativity brought our vision to
                                life in a way we never imagined. We saw an immediate improvement
                                in user engagement after launch!"
                            </p>
                            <h3>Steve Smith</h3>
                            <span>Marketing Director, ABC Corp</span>
                        </div>
                        <div
                            className="testimonial-item text-center"
                            data-dot="<img className='img-fluid' src='img/testimonial-2.jpg' alt=''>"
                        >
                            <p className="fs-5">
                                "I highly recommend this team for any web design and development
                                needs. The quality of their work and the professionalism they
                                bring to every project is unmatched. They really took the time
                                to understand our brand."
                            </p>
                            <h3>Michael Lee</h3>
                            <span>CEO, Digital Solutions</span>
                        </div>
                        <div
                            className="testimonial-item text-center"
                            data-dot="<img className='img-fluid' src='img/testimonial-3.jpg' alt=''>"
                        >
                            <p className="fs-5">
                                "The team was extremely responsive and efficient. They helped us
                                not only with the web design but also improved our overall user
                                experience. We are thrilled with the outcome and would
                                definitely work with them again."
                            </p>
                            <h3>Rachel Williams</h3>
                            <span>Product Manager, Tech Innovations</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;