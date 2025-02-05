import React from 'react'
import T1 from '../assets/img/team-1.jpg';
import T2 from '../assets/img/team-2.jpg';
import T3 from '../assets/img/team-3.jpg';
import T4 from '../assets/img/team-4.jpg';
const TeamMain = () => {
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
                            <h6>Team Members</h6>
                            <h2 className="mb-4">
                                We Are Creative Architecture Team For Your Dream Home
                            </h2>
                        </div>
                    </div>
                    <div className="row g-0 team-items">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={T1}
                                        alt="Team Member"
                                    />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-instagram"></i
                                        ></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">John Doe</h3>
                                    <span>Lead Architect</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={T2}
                                        alt="Team Member"
                                    />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-instagram"></i
                                        ></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">James Smith</h3>
                                    <span>Senior Architect</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={T3}
                                        alt="Team Member"
                                    />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-instagram"></i
                                        ></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">Johnson</h3>
                                    <span>Project Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={T4}
                                        alt="Team Member"
                                    />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>
                                        <a className="btn btn-square" href=""
                                        ><i className="fab fa-instagram"></i
                                        ></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">David Brown</h3>
                                    <span>Design Specialist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMain;