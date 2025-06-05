import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ProjectMain = () => {
    const [project, setProject] = useState([]);
    const gettingProject = async () => {
        try {
            const { data } = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/project/lastProject`);
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
        <section className="py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <div className="section-title">
                        <h6>Our Projects</h6>
                        <h2 className="mb-4">
                            Visit Our Latest Projects And Our Innovative Works
                        </h2>
                    </div>
                </div>

                <div className="tab-content" id="projectTabsContent">


                    <div className="tab-pane fade show active" id="all-projects" role="tabpanel" aria-labelledby="all-projects-tab">
                        <div className="row g-4">
                            {project.map((p, i) => (

                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm">
                                        <img src={`https://modular-vision-rea-backend.onrender.com/static/projects/${p.image}`} className="card-img-top" alt="Project 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className="card-text">
                                                {p.short}
                                            </p>
                                            <Link to={`/project/${p.id}`} className="btn btn-inline-body btn-sm" >View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProjectMain;