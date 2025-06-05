import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [about, setAbout] = useState([]);
    const getAboutCom = async () => {
        try {
            const {data} = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/about/get`);
            if (data?.success) {
                setAbout(data?.results[0]);
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }
    useEffect(()=>{
        getAboutCom()
    },[])
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                            <div className="section-title">
                                <h6>About Us</h6>
                                <h2 className="mb-4">
                                    {about.head}
                                </h2>
                            </div>
                            <p>
                                {about.decs1}
                            </p>
                            <p className="mb-3">
                                {about.decs2}
                            </p>
                            <div className="d-flex align-items-center mb-4">
                                <div
                                    className="d-flex flex-shrink-0 align-items-center justify-content-center txt-primary"
                                    style={{width: '80px', height: '80px', border: '5px solid #d31e26'}}
                                >
                                    <h5 className="display-6 fw-bold" data-toggle="counter-up">{(new Date().getFullYear() - about.year) + 1}</h5>
                                </div>
                                <div className="ps-4">
                                    <h4>Years</h4>
                                    <h4 className="mb-0">Working Experience</h4>
                                </div>
                            </div>
                            <Link className="btn btn-inline-body py-3 px-5" to={'/about'}>Read More</Link>
                        </div>
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <img
                                className="img-fluid rounded"
                                src={`https://modular-vision-rea-backend.onrender.com/static/abouts/${about.image}`}
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