import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ServiesMain = () => {
    const [service, setService] = useState([]);
    const getService = async () => {
        try {
            const { data } = await axios.get(`/api/v1/service/getLast`);
            if (data?.success) {
                setService(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    useEffect(() => {
        getService();
    }, [])
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: "700px" }}
                    >
                        <div className="section-title">
                            <h6>Our Services</h6>
                            <h2 className="mb-4">
                                We Focus On Modern Architecture And Interior Design
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {service.map((s, i) => (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div
                                    className="service-item d-flex position-relative text-center h-100"
                                >
                                    <img className="bg-img" src={`/static/services/${s.image}`} alt="Service" />
                                    <div className="service-text p-5">
                                        <i className={s.icons}></i>
                                        <h3 className="mb-3">{s.name}</h3>
                                        <p className="mb-4">
                                            {s.shortDesc}
                                        </p>
                                        <Link className="btn" to={`/service/${s.id}`}> <i className="fa fa-plus me-3"></i>Read More </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiesMain;