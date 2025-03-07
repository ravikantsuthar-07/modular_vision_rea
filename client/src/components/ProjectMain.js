import React, { useEffect, useState } from 'react'
import P1 from '../assets/img/project-1.jpg'
import P2 from '../assets/img/project-2.jpg'
import P3 from '../assets/img/project-3.jpg'
import P4 from '../assets/img/project-4.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ProjectMain = () => {
    const [project, setProject] = useState([]);
    const gettingProject = async () => {
        try {
            const { data } = await axios.get(`/api/v1/project/lastProject`);
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
        <section class="py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <div class="section-title">
                        <h6>Our Projects</h6>
                        <h2 class="mb-4">
                            Visit Our Latest Projects And Our Innovative Works
                        </h2>
                    </div>
                </div>

                <div class="tab-content" id="projectTabsContent">


                    <div class="tab-pane fade show active" id="all-projects" role="tabpanel" aria-labelledby="all-projects-tab">
                        <div class="row g-4">
                            {project.map((p, i) => (

                                <div class="col-md-4">
                                    <div class="card border-0 shadow-sm">
                                        <img src={`/static/projects/${p.image}`} class="card-img-top" alt="Project 1" />
                                        <div class="card-body">
                                            <h5 class="card-title">{p.name}</h5>
                                            <p class="card-text">
                                                {p.short}
                                            </p>
                                            <Link to={`/project/${p.id}`} class="btn btn-inline-body btn-sm" >View Details</Link>
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