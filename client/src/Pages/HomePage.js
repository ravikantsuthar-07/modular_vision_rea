import React from 'react'
import Layout from '../components/Lauouts/Layout'
import Slider from '../components/SliderMain';
import FactsMain from '../components/FactsMain';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <FactsMain />
            <AboutUs />
        </Layout>
    )
}

export default HomePage;