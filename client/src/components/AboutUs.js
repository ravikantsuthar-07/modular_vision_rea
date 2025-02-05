import React from 'react'
import AboutImg from '../assets/img/about.jpg'

const AboutUs = () => {
    return (
        <section>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                            <div class="section-title">
                                <h6>About Us</h6>
                                <h2 class="mb-4">
                                    A Creative Architecture Agency For Your Dream Home
                                </h2>
                            </div>
                            <p>
                                At [Your Company Name], we specialize in creating innovative,
                                sustainable, and functional designs tailored to your needs.
                                Whether you’re building your dream home or remodeling an
                                existing space, we ensure every project reflects your vision and
                                enhances your lifestyle.
                            </p>
                            <p class="mb-3">
                                Our team of passionate architects and designers brings years of
                                expertise in residential and commercial projects. We believe in
                                blending aesthetics with practicality to deliver spaces that are
                                not only visually appealing but also efficient and comfortable.
                            </p>
                            <div class="d-flex align-items-center mb-4">
                                <div
                                    class="d-flex flex-shrink-0 align-items-center justify-content-center txt-primary"
                                    style={{width: '80px', height: '80px', border: '5px solid #d31e26'}}
                                >
                                    <h5 class="display-6 fw-bold" data-toggle="counter-up">25</h5>
                                </div>
                                <div class="ps-4">
                                    <h4>Years</h4>
                                    <h4 class="mb-0">Working Experience</h4>
                                </div>
                            </div>
                            <a class="btn btn-inline-body py-3 px-5" href="#">Read More</a>
                        </div>
                        <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <img
                                class="img-fluid rounded"
                                src={AboutImg}
                                alt="Creative Architecture"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs