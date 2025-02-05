import React from 'react'
import P1 from '../assets/img/project-1.jpg'
import P2 from '../assets/img/project-2.jpg'
import P3 from '../assets/img/project-3.jpg'
import P4 from '../assets/img/project-4.jpg'
const ProjectMain = () => {
    return (
        <section>
            <div className="container-xxl project py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{maxWidth: "600px"}}
                    >
                        <div className="section-title">
                            <h6>Our Projects</h6>
                            <h2 className="mb-4">
                                Visit Our Latest Projects And Our Innovative Works
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div
                                className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4"
                            >
                                <button
                                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tab-pane-1"
                                    type="button"
                                >
                                    01. Modern Complex
                                </button>
                                <button
                                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tab-pane-2"
                                    type="button"
                                >
                                    02. Royal Hotel
                                </button>
                                <button
                                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tab-pane-3"
                                    type="button"
                                >
                                    03. Mexwel Buiding
                                </button>
                                <button
                                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tab-pane-4"
                                    type="button"
                                >
                                    04. Shopping Complex
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img
                                                    className="position-absolute img-fluid w-100 h-100"
                                                    src={P1}
                                                    style={{objectFit: "cover"}}
                                                    alt="Projects"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">
                                                25 Years Of Experience In Architecture Industry
                                            </h1>
                                            <p className="mb-4">
                                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                                                sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                                                lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Design
                                                Approach
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Innovative
                                                Solutions
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Project
                                                Management
                                            </p>
                                            <a href="" className="btn btn-inline-body py-3 px-5 mt-3"
                                            >Read More</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img
                                                    className="position-absolute img-fluid w-100 h-100"
                                                    src={P2}
                                                    style={{objectFit: "cover"}}
                                                    alt="Projects"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">
                                                25 Years Of Experience In Architecture Industry
                                            </h1>
                                            <p className="mb-4">
                                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                                                sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                                                lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Design
                                                Approach
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Innovative
                                                Solutions
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Project
                                                Management
                                            </p>
                                            <a href="" className="btn btn-inline-body py-3 px-5 mt-3"
                                            >Read More</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img
                                                    className="position-absolute img-fluid w-100 h-100"
                                                    src={P3}
                                                    style={{objectFit: "cover"}}
                                                    alt="Projects"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">
                                                25 Years Of Experience In Architecture Industry
                                            </h1>
                                            <p className="mb-4">
                                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                                                sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                                                lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Design
                                                Approach
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Innovative
                                                Solutions
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Project
                                                Management
                                            </p>
                                            <a href="" className="btn btn-inline-body py-3 px-5 mt-3"
                                            >Read More</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img
                                                    className="position-absolute img-fluid w-100 h-100"
                                                    src={P4}
                                                    style={{objectFit: "cover"}}
                                                    alt="Projects"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">
                                                25 Years Of Experience In Architecture Industry
                                            </h1>
                                            <p className="mb-4">
                                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                                                sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                                                lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Design
                                                Approach
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Innovative
                                                Solutions
                                            </p>
                                            <p>
                                                <i className="fa fa-check txt-primary me-3"></i>Project
                                                Management
                                            </p>
                                            <a href="" className="btn btn-inline-body py-3 px-5 mt-3"
                                            >Read More</a
                                            >
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

export default ProjectMain;