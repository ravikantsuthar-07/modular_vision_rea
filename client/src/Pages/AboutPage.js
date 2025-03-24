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
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <Link to={'/'} className="text-white">Home</Link>
                            </li>
                            <li className="breadcrumb-item txt-primary" aria-current="page">
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