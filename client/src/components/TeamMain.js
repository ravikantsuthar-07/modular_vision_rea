import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
const TeamMain = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [sliders, setSliders] = useState([]);
const getClients = async () => {
    try {
        const {data} = await axios.get(`/api/v1/client/get`);
        if (data?.success) {
            setSliders(data?.results)
        }
    } catch (error) {
        alert(error?.responce?.data?.message);
    }
}

useEffect(() => {
    getClients()
}, [])
    return (
        <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: "600px" }}
                    >
                        <div className="section-title">
                            <h6>Our Clients</h6>
                            <h2 className="mb-4">
                                We Are Creative Architecture Team For Your Dream Home
                            </h2>
                        </div>
                    </div>
                    <div className='w-3/4 m-aut'>
                        <div className='mt-20 text-center'>
                            <Slider {...settings}>
                                {sliders.map((t, i) => (
                                    <div className='h-[500px] flex text-black rounded-xl' style={{ overflowY: 'hidden' }}>
                                        <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center text-center items-center'>
                                            <img src={`/static/clients/${t.image}`} alt='template' height={180} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMain;