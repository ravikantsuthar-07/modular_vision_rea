import React, { useEffect, useState } from 'react'
import Layout from '../components/Lauouts/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import PageNotFound from './PageNotFound';

const ProjectDetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const [project, setProject] = useState([]);
    const [gallery, setGallery] = useState([]);
    const getSingleService = async (id) => {
        const { data } = await axios.get(`/api/v1/project/getSingle/${id}`);
        if (data?.success) {
            setProject(data?.results)
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
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString()
    };
    useEffect(() => {
        getSingleService(id);
        getGalleryImage(id)
    }, [id]);
    return (

        project.length === 0 ? (<PageNotFound />) : (

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
                                <img src={`/static/projects/${project[0].image}`} className="img-fluid rounded shadow-sm" alt='Projects images' />
                            </div>
                            <div className="col-md-6">
                                <h1 className="mb-3">{project[0].name}</h1>
                                <p className="text-muted">
                                    Category: <span className="fw-semibold">{project[0].category}</span>
                                </p>
                                <p className="lead">
                                    {project[0].description}
                                </p>
                                <ul className="list-unstyled">
                                    <li><strong>Project Type:</strong> {project[0].type}</li>
                                    <li><strong>Completion Date:</strong> {formatDate(project[0].complete_date)}</li>
                                    <li><strong>Location:</strong> {project[0].location}</li>
                                </ul>
                                <Link to={`/contact`} className="btn btn-inline-body mt-3">Contact Us</Link>
                            </div>
                        </div>

                        <hr className="my-5" />

                        {gallery.length !== 0 ? (

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="mb-4">Project Gallery</h2>
                                </div>
                                {gallery.map((g, i) => (

                                    <div className="col-md-4 mb-4">
                                        <img src={`/static/gallerys/${g.image}`} alt='aaaa' className="img-fluid rounded shadow-sm" />
                                    </div>
                                ))}
                            </div>
                        ) : ("")}
                    </div>
                </section>
            </Layout>
        )


    )
}

export default ProjectDetailsPage