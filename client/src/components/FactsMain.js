import React from 'react'

const FactsMain = () => {
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item text-center bg-light h-100 px-3 py-5 pt-0">
                                <div className="fact-icon mb-4">
                                    <i className="fa-solid fa-pencil-ruler fa-3x"></i>
                                </div>
                                <h3 className="mb-3">Design Approach</h3>
                                <p className="mb-0">
                                    We focus on user-centric design, creating intuitive interfaces
                                    that enhance user engagement and satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item text-center bg-light h-100 px-3 py-5 pt-0">
                                <div className="fact-icon mb-4">
                                    <i className="fa-solid fa-lightbulb fa-3x"></i>
                                </div>
                                <h3 className="mb-3">Innovative Solutions</h3>
                                <p className="mb-0">
                                    Leveraging cutting-edge technologies, we provide creative
                                    solutions tailored to meet your business needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item text-center bg-light h-100 px-3 py-5 pt-0">
                                <div className="fact-icon mb-4">
                                    <i className="fa-solid fa-chart-line fa-3x"></i>
                                </div>
                                <h3 className="mb-3">Project Management</h3>
                                <p className="mb-0">
                                    Our structured project management ensures timely delivery and
                                    excellent communication throughout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FactsMain