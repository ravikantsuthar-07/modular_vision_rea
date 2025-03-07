import React from 'react'
import Layout from '../components/Lauouts/Layout'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <Layout>
            <div
                data-wow-delay="0.1s"
                class="container-fluid page-header py-5 mb-5 wow fadeIn"
            >
                <div class="container py-5">
                    <h1 class="display-1 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase mb-0">
                            <li class="breadcrumb-item">
                                <Link to={'/'} class="text-white">Home</Link>
                            </li>
                            <li class="breadcrumb-item txt-primary" aria-current="page">
                                About
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <AboutUs />
            <Features />
        </Layout>
    )
}

export default AboutPage