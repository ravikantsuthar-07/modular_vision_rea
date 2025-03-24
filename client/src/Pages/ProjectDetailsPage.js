import React, { useEffect, useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ProjectDetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const [project, setProject] = useState([]);
    const [gallery, setGallery] = useState([]);
    const getSingleService = async (id) => {
        const { data } = await axios.get(`/api/v1/project/getSingle/${id}`);
        if (data?.success) {
            setProject(data?.results[0])
        }
    }

    const getGalleryImage = async (id) => {
        try {
            const { data } = await axios.get(`/api/v1/gallery/get/${id}`);
            if (data?.success) {
                setGallery(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    useEffect(() => {
        getSingleService(id);
        getGalleryImage(id)
    }, [id]);
    return (
        <Layout>

            <div
                data-wow-delay="0.1s"
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">{project.name}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <Link to={'/'} className="text-white" >Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={'/projects'} className="text-white" >Projects</Link>
                            </li>
                            <li className="breadcrumb-item txt-primary" aria-current="page">
                                # {id}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`/static/projects/${project.image}`} className="img-fluid rounded shadow-sm"  alt='Projects images' />
                        </div>
                        <div className="col-md-6">
                            <h1 className="mb-3">{project.name}</h1>
                            <p className="text-muted">
                                Category: <span className="fw-semibold">{project.category}</span>
                            </p>
                            <p className="lead">
                                {project.description}
                            </p>
                            <ul className="list-unstyled">
                                <li><strong>Project Type:</strong> {project.type}</li>
                                <li><strong>Completion Date:</strong> {project.complete_date}</li>
                                <li><strong>Location:</strong> {project.location}</li>
                            </ul>
                            <Link to={`/contact`} className="btn btn-inline-body mt-3">Contact Us</Link>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4">Project Gallery</h2>
                        </div>
                        {gallery.map((g, i) => (

                            <div className="col-md-4 mb-4">
                                <img src={`/static/gallerys/${g.image}`} alt={`Gallery Image ${i+1}`} className="img-fluid rounded shadow-sm"  />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default ProjectDetailsPage