import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminProjects = () => {
    const [project, setProject] = useState([]);
    const [auth] = useAuth();
    const navigate = useNavigate();
    const getProject = async () => {
        try {
            const {data} = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/project/getAdmin`, {
                headers: {
                    "Authorization" : auth.token
                }
            });
            if (data?.success) {
                setProject(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    const updateProjectStatus = async (id, status) => {
        try {
            let send;
            if (status) {
                send = 0
            } else {
                send = 1
            }
            const {data} = await axios.put(`https://modular-vision-rea-backend.onrender.com/api/v1/project/updateStatus/${id}`, {status: send}, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    const deleteProject = async (id) => {
        try {
            const {data} = await axios.delete(`https://modular-vision-rea-backend.onrender.com/api/v1/project/delete/${id}`, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    } 
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString()
    };
    useEffect(()=>{
        getProject();
        // eslint-disable-next-line
    }, [])
    return (
        <AdminLayout>
            <main id="main" className="main bg-light" style={{ background: '#fff' }}>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Project</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Service Name</th>
                                                <th scope="col">Completion Date</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.name}</td>
                                                    <td>{c.category}</td>
                                                    <td>{c.SName}</td>
                                                    <td>{formatDate(c.complete_date)}</td>
                                                    <td><img src={`https://modular-vision-rea-backend.onrender.com/static/projects/${c.image}`} alt='projectImage' width={100} /></td>
                                                    <td>
                                                        <button type='buttton' className={c.status ? 'btn btn-primary' : 'btn btn-success'} onClick={() => { updateProjectStatus(c.id, c.status) }}>{c.status ? 'Activate' : 'De Activate'}</button>
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/admin/edit_project/${c.id}`)} >Update</button>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteProject(c.id)}>Delete</button>
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/admin/gallery/${c.id}`)} >Show Image</button>
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/admin/add_gallery/${c.id}`)} >Add Image</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AdminLayout>
    )
}

export default AdminProjects