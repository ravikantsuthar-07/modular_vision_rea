import React from 'react'
import Layout from '../components/Lauouts/Layout'
import Slider from '../components/SliderMain';
import FactsMain from '../components/FactsMain';
import AboutUs from '../components/AboutUs';
import ServiceMain from '../components/ServiesMain';
import Features from '../components/Features';
import ProjectMain from '../components/ProjectMain';
import TeamMain from '../components/TeamMain';
// import BlogsMain from '../components/BlogsMain';
import Appointment from '../components/Appointment';

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <FactsMain />
            <AboutUs />
            <ServiceMain />
            <Features />
            <ProjectMain />
            <TeamMain />
            {/* <Testimonial /> */}
            {/* <BlogsMain /> */}
            <Appointment />
        </Layout>
    )
}

export default HomePage;