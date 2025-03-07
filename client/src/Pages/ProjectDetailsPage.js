import React, { useEffect, useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ProjectDetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const [project, setProject] = useState([]);
    const getSingleService = async (id) => {
        const { data } = await axios.get(`/api/v1/project/getSingle/${id}`);
        if (data?.success) {
            setProject(data?.results[0])
        }
    }
    useEffect(() => {
        getSingleService(id);
    }, [id]);
    return (
        <Layout>

            <div
                data-wow-delay="0.1s"
                class="container-fluid page-header py-5 mb-5 wow fadeIn"
            >
                <div class="container py-5">
                    <h1 class="display-1 text-white animated slideInDown">Projects Detail</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase mb-0">
                            <li class="breadcrumb-item">
                                <Link to={'/'} class="text-white" >Home</Link>
                            </li>
                            <li class="breadcrumb-item">
                                <Link to={'/projects'} class="text-white" >Projects</Link>
                            </li>
                            <li class="breadcrumb-item txt-primary" aria-current="page">
                                # {id}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img
                                src={`/static/projects/${project.image}`}
                                class="img-fluid rounded shadow-sm"
                                alt="Project Image"
                            />
                        </div>
                        <div class="col-md-6">
                            <h1 class="mb-3">{project.name}</h1>
                            <p class="text-muted">
                                Category: <span class="fw-semibold">{project.category}</span>
                            </p>
                            <p class="lead">
                               {project.description}
                            </p>
                            <ul class="list-unstyled">
                                <li><strong>Project Type:</strong> {project.type}</li>
                                <li><strong>Completion Date:</strong> {project.complete_date}</li>
                                <li><strong>Location:</strong> {project.location}</li>
                            </ul>
                            <Link to={`/contact`} class="btn btn-inline-body mt-3">Contact Us</Link>
                        </div>
                    </div>

                    <hr class="my-5" />

                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-4">Project Gallery</h2>
                        </div>
                        <div class="col-md-4 mb-4">
                            <img
                                src="img/about-1.jpg"
                                class="img-fluid rounded shadow-sm"
                                alt="Gallery Image 1"
                            />
                        </div>
                        <div class="col-md-4 mb-4">
                            <img
                                src="img/about-2.jpg"
                                class="img-fluid rounded shadow-sm"
                                alt="Gallery Image 2"
                            />
                        </div>
                        <div class="col-md-4 mb-4">
                            <img
                                src="img/about.jpg"
                                class="img-fluid rounded shadow-sm"
                                alt="Gallery Image 3"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default ProjectDetailsPage