import React, { useEffect, useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProjectePage = () => {
    const [project, setProject] = useState([]);
    const gettingProject = async () => {
        try {
            const { data } = await axios.get(`/api/v1/project/get`);
            if (data?.success) {
                setProject(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    useEffect(() => {
        gettingProject();
    }, [])
    return (
        <Layout>
            <div
                data-wow-delay="0.1s"
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Projects</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <Link to={'/'} className="text-white" >Home</Link>
                            </li>
                            <li className="breadcrumb-item txt-primary" aria-current="page">
                                Projects
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section className="py-5">
                <div className="container">
                    <ul
                        className="nav nav-tabs justify-content-center mb-4"
                        id="projectTabs"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="all-projects-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#all-projects"
                                type="button"
                                role="tab"
                                aria-controls="all-projects"
                                aria-selected="true"
                            >
                                All Projects
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="living-room-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#living-room"
                                type="button"
                                role="tab"
                                aria-controls="living-room"
                                aria-selected="false"
                            >
                                Living Rooms
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="bedroom-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#bedroom"
                                type="button"
                                role="tab"
                                aria-controls="bedroom"
                                aria-selected="false"
                            >
                                Bedrooms
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="kitchen-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#kitchen"
                                type="button"
                                role="tab"
                                aria-controls="kitchen"
                                aria-selected="false"
                            >
                                Kitchens
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" id="projectTabsContent">
                        <div
                            className="tab-pane fade show active"
                            id="all-projects"
                            role="tabpanel"
                            aria-labelledby="all-projects-tab"
                        >
                            <div className="row g-4">
                                {project.map((p, i) => (
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm">
                                            <img
                                                src={`/static/projects/${p.image}`}
                                                className="card-img-top"
                                                alt="Project 1"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{p.name}</h5>
                                                <p className="card-text">
                                                    A sleek, stylish living space with contemporary design.
                                                </p>
                                                <Link to={`/project/${p.id}`}
                                                    className="btn btn-inline-body btn-sm"
                                                >View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* <div className="col-md-4">
                                    <div className="card border-0 shadow-sm">
                                        <img
                                            src="img/carousel-2.jpg"
                                            className="card-img-top"
                                            alt="Project 2"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Minimalist Bedroom</h5>
                                            <p className="card-text">
                                                A calming bedroom designed for simplicity and comfort.
                                            </p>
                                            <a
                                                href="project-details.html?project=2"
                                                className="btn btn-inline-body btn-sm"
                                            >View Details</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm">
                                        <img
                                            src="img/carousel-3.jpg"
                                            className="card-img-top"
                                            alt="Project 3"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Elegant Kitchen</h5>
                                            <p className="card-text">
                                                A functional kitchen blending modern aesthetics and
                                                utility.
                                            </p>
                                            <a
                                                href="project-details.html?project=3"
                                                className="btn btn-inline-body btn-sm"
                                            >View Details</a
                                            >
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="living-room"
                            role="tabpanel"
                            aria-labelledby="living-room-tab"
                        >
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm">
                                        <img
                                            src="img/carousel-1.jpg"
                                            className="card-img-top"
                                            alt="Living Room 1"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Contemporary Living Room</h5>
                                            <p className="card-text">
                                                A space designed for relaxation and social gatherings.
                                            </p>
                                            <a
                                                href="project-details.html?project=4"
                                                className="btn btn-inline-body btn-sm"
                                            >View Details</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="bedroom"
                            role="tabpanel"
                            aria-labelledby="bedroom-tab"
                        >
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm">
                                        <img
                                            src="img/carousel-2.jpg"
                                            className="card-img-top"
                                            alt="Bedroom 1"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Luxury Bedroom</h5>
                                            <p className="card-text">
                                                A bedroom designed for ultimate relaxation and luxury.
                                            </p>
                                            <a
                                                href="project-details.html?project=5"
                                                className="btn btn-inline-body btn-sm"
                                            >View Details</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="kitchen"
                            role="tabpanel"
                            aria-labelledby="kitchen-tab"
                        >
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm">
                                        <img
                                            src="img/carousel-3.jpg"
                                            className="card-img-top"
                                            alt="Kitchen 1"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Modern Kitchen</h5>
                                            <p className="card-text">
                                                A functional and beautiful space for cooking and
                                                entertaining.
                                            </p>
                                            <a
                                                href="project-details.html?project=6"
                                                className="btn btn-inline-body btn-sm"
                                            >View Details</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectePage 