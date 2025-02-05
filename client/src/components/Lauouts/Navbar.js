import Header from './Header';
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
function Navbar() {
    return (

        <>
            <Header />
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to={'/'} className="navbar-brand ms-4 ms-lg-0">
                    <img className="me-3" src={Logo} alt="logo" />
                </Link>
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
                        <div className="nav-item ">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link to={'/about'} className="nav-link" >About Us</Link>
                        </div>
                        <div className="nav-item">
                            <Link to={'/servies'} className="nav-link" >Services</Link>
                        </div>
                        {/* <div className="nav-item dropdown">
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
                        </div> */}

                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >Projects</a>
                            <div className="dropdown-menu border-0 m-0">
                                <Link to={'/project'} className="dropdown-item">Projects</Link>
                                {/* <Link to={'/project'} className="dropdown-item">Projects</Link> */}
                            </div>
                        </div>
                        <div className="nav-item ">
                            <Link to={'/blog'} className="nav-link " >Blogs</Link>
                        </div>
                    </div>
                    <Link to={'/contact'} className="btn btn-outline-body py-2 px-4" >Contact</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;