import Header from './Header';
import Logo from "../../assets/img/logo.png";
function Navbar(params) {
    return (

        <>
            <Header />
            <nav
                className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <img className="me-3" src={Logo} alt="logo" />
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >Home</a>
                            <div className="dropdown-menu border-0 m-0">
                                <a href="index.html" className="dropdown-item active">Home 01</a>
                                <a href="index-02.html" className="dropdown-item">Home 02</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >About Us</a>
                            <div className="dropdown-menu border-0 m-0">
                                <a href="about.html" className="dropdown-item">About 01</a>
                                <a href="about-02.html" className="dropdown-item">About 02</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >Services</a>
                            <div className="dropdown-menu border-0 m-0">
                                <a href="service.html" className="dropdown-item">Services</a>
                                <a href="service-details.html" className="dropdown-item"
                                >Service Details</a
                                >
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >Projects</a>
                            <div className="dropdown-menu border-0 m-0">
                                <a href="project.html" className="dropdown-item">Projects 01</a>
                                <a href="project-02.html" className="dropdown-item">Projects 02</a>
                                <a href="project-details.html" className="dropdown-item"
                                >Project Details</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >Blogs</a
                            >
                            <div className="dropdown-menu border-0 m-0">
                                <a href="blog.html" className="dropdown-item">Blog</a>
                                <a href="blog-details.html" className="dropdown-item">Blog Details</a>
                            </div>
                        </div>
                    </div>
                    <a
                        href="contact.html"
                        className="btn btn-outline-body py-2 px-4"
                    >Contact</a>
                </div>
            </nav>

        </>


    );
}

export default Navbar;