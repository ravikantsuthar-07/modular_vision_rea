import React, { useEffect, useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProjectePage = () => {
    const [project, setProject] = useState([]);
    const [category, setCategory] = useState([]);
    const gettingProject = async () => {
        try {
            const { data } = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/project/get`);
            if (data?.success) {
                setProject(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    const gettingProjectCategory = async () => {
        try {
            const { data } = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/project/getCategoryProject`);
            if (data?.success) {
                setCategory(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    const changeProject = async (category) => {
        try {
            const { data } = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/project/getByCategoryProject/${category}`);
            if (data?.success) {
                setProject(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    useEffect(() => {
        gettingProject();
        gettingProjectCategory();
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
                            <button className="nav-link" onClick={() => gettingProject()}>
                                All Projects
                            </button>
                        </li>
                        {category.map((c,i) => (

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" onClick={() => changeProject(c.category)} >
                                {c.category}
                            </button>
                        </li>
                        ))}
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
                                                src={`https://modular-vision-rea-backend.onrender.com/static/projects/${p.image}`}
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
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectePage 