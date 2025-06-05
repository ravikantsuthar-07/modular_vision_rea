import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddProject = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [completeDate, setCompleteDate] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [auth] = useAuth();
    const [service, setService] = useState([]);
    const navigate = useNavigate()
    const getService = async () => {
        try {
            const { data } = await axios.get(`https://modular-vision-rea-backend.onrender.com/api/v1/service/get`);
            if (data?.success) {
                setService(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    const handleProject = async (e) =>{
        e.preventDefault();
        try {
            const projectData = new FormData();
            projectData.append('name', name);
            projectData.append('category', category);
            projectData.append('serviceid', serviceId);
            projectData.append('description', description);
            projectData.append('type', type);
            projectData.append('complete_date', completeDate);
            projectData.append('location', location);
            projectData.append('img', image);

            const {data} = await axios.post(`https://modular-vision-rea-backend.onrender.com/api/v1/project/create`, projectData, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigator(`/admin/projects`);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    useEffect(() => {
        getService()
    }, [])
    return (
        <AdminLayout>
            <main id="main" className="main">
                <div className='section align-center'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Add New Project</h3>
                                    <form method='post' onSubmit={handleProject} encType="multipart/form-data" style={{ width: '100%' }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Service Name" onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Category</label>
                                                <input type="text" className="form-control" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Service</label>
                                                <select className='form-control' onChange={(e) => setServiceId(e.target.value)}>
                                                    {service.map((s, i) => (
                                                        <option value={s.id}>{s.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Describtion</label>
                                                <textarea className='form-control' placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Complete Date</label>
                                                <input type="date" className="form-control" onChange={(e) => setCompleteDate(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Location</label>
                                                <input type="text" className="form-control" placeholder="Enter Location of Project" onChange={(e) => setLocation(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Project Type</label>
                                                <input type="text" className="form-control" placeholder="Enter Project Tyoe" onChange={(e) => setType(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Image</label>
                                                <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Service</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AdminLayout>
    )
}

export default AdminAddProject