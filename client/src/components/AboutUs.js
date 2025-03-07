import React, { useEffect, useState } from 'react'
import AboutImg from '../assets/img/about.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [about, setAbout] = useState([]);
    const getAboutCom = async () => {
        try {
            const {data} = await axios.get(`/api/v1/about/get`);
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
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                            <div class="section-title">
                                <h6>About Us</h6>
                                <h2 class="mb-4">
                                    {about.head}
                                </h2>
                            </div>
                            <p>
                                {about.decs1}
                            </p>
                            <p class="mb-3">
                                {about.decs2}
                            </p>
                            <div class="d-flex align-items-center mb-4">
                                <div
                                    class="d-flex flex-shrink-0 align-items-center justify-content-center txt-primary"
                                    style={{width: '80px', height: '80px', border: '5px solid #d31e26'}}
                                >
                                    <h5 class="display-6 fw-bold" data-toggle="counter-up">{(new Date().getFullYear() - about.year) + 1}</h5>
                                </div>
                                <div class="ps-4">
                                    <h4>Years</h4>
                                    <h4 class="mb-0">Working Experience</h4>
                                </div>
                            </div>
                            <Link class="btn btn-inline-body py-3 px-5" to={'/about'}>Read More</Link>
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