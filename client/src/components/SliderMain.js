import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios';
const SliderMain = () => {
    const [sliders, setSliders] = useState([])
    const gettingSlider = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get');
            if (data?.success) {
                setSliders(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    useEffect(()=>{
        gettingSlider();
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <section>
            <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="owl-carousel header-carousel position-relative">
                    <Slider {...settings}>
                        {sliders.map((slider, i) => (                            
                            <div key={i}>
                                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                                    <img className="img-fluid" src={`/static/sliders/${slider.image}`} alt="Modern Architecture" />
                                    <div className="owl-carousel-inner">
                                        <div className="container">
                                            <div className="row justify-content-start">
                                                <div className="col-10 col-lg-10">
                                                    <h2 className="display-4 text-white animated slideInDown">
                                                        {slider.heading}
                                                    </h2>
                                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                                                       {slider.description}
                                                    </p>
                                                    <Link to={'/'} className="btn btn-inline-body py-3 px-5 animated slideInLeft"> Read More </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div>
                            <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                                <img className="img-fluid" src={Secound} alt="Modern Architecture" />
                                <div className="owl-carousel-inner">
                                    <div className="container">
                                        <div className="row justify-content-start">
                                            <div className="col-10 col-lg-10">
                                                <h2 className="display-4 text-white animated slideInDown">
                                                    Inspiring Architecture & Interiors
                                                </h2>
                                                <p className="fs-5 fw-medium text-white mb-4 pb-3">
                                                    Redefining spaces with modern architecture and elegant
                                                    interiors tailored to your vision.
                                                </p>
                                                <Link to={'/'} className="btn btn-inline-body py-3 px-5 animated slideInLeft"> Read More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </div>
        </section >
    )
}

export default SliderMain;