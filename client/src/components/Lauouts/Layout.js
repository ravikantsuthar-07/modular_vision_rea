import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

export default function Layout({ children, title, description, keywords, author }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <main style={{ minHeight: '80vh' }}>
                <Navbar />
                {children}
            </main>
            <Footer />
        </>
    )
}