import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frist from '../assets/img/carousel-1.jpg'
import Secound from '../assets/img/carousel-2.jpg'
import Third from '../assets/img/carousel-3.jpg'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
const SliderMain = () => {
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
            <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="owl-carousel header-carousel position-relative">
                    <Slider {...settings}>
                        <div>
                            <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                                <img class="img-fluid" src={Frist} alt="Modern Architecture" />
                                <div class="owl-carousel-inner">
                                    <div class="container">
                                        <div class="row justify-content-start">
                                            <div class="col-10 col-lg-10">
                                                <h2 class="display-4 text-white animated slideInDown">
                                                    Inspiring Architecture & Interiors
                                                </h2>
                                                <p class="fs-5 fw-medium text-white mb-4 pb-3">
                                                    Redefining spaces with modern architecture and elegant
                                                    interiors tailored to your vision.
                                                </p>
                                                <Link to={'/'}  class="btn btn-inline-body py-3 px-5 animated slideInLeft"> Read More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                                <img class="img-fluid" src={Secound} alt="Modern Architecture" />
                                <div class="owl-carousel-inner">
                                    <div class="container">
                                        <div class="row justify-content-start">
                                            <div class="col-10 col-lg-10">
                                                <h2 class="display-4 text-white animated slideInDown">
                                                    Inspiring Architecture & Interiors
                                                </h2>
                                                <p class="fs-5 fw-medium text-white mb-4 pb-3">
                                                    Redefining spaces with modern architecture and elegant
                                                    interiors tailored to your vision.
                                                </p>
                                                <Link to={'/'}  class="btn btn-inline-body py-3 px-5 animated slideInLeft"> Read More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                                <img class="img-fluid" src={Third} alt="Modern Architecture" />
                                <div class="owl-carousel-inner">
                                    <div class="container">
                                        <div class="row justify-content-start">
                                            <div class="col-10 col-lg-10">
                                                <h2 class="display-4 text-white animated slideInDown">
                                                    Inspiring Architecture & Interiors
                                                </h2>
                                                <p class="fs-5 fw-medium text-white mb-4 pb-3">
                                                    Redefining spaces with modern architecture and elegant
                                                    interiors tailored to your vision.
                                                </p>
                                                <Link to={'/'}  class="btn btn-inline-body py-3 px-5 animated slideInLeft"> Read More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section >
    )
}

export default SliderMain;