import React, { useState } from 'react'
import axios from 'axios'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddSercice = () => {
    const [name, setName] = useState("");
    const [short, setShort] = useState("");
    const [icons, setIcons] = useState("");
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [describtion, setDescribtion] = useState("");
    const [describtion2, setDescribtion2] = useState("");
    const [image, setImage] = useState("");
    const [auth] = useAuth();
    const navigator = useNavigate();

    const handleService = async (e) => {
        e.preventDefault();
        try {
            const serviceData = new FormData();
            serviceData.append('name', name);
            serviceData.append('shortDesc', short);
            serviceData.append('icons', icons);
            serviceData.append('heading', heading);
            serviceData.append('subHeading', subHeading);
            serviceData.append('Decs1', describtion);
            serviceData.append('Decs2', describtion2);
            serviceData.append('img', image);

            const { data } = await axios.post(`https://modular-vision-rea-backend.onrender.com/api/v1/service/create`, serviceData, {
                headers: {
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                alert(data?.message);
                navigator('/admin/services');
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    return (
        <AdminLayout>

            <main id="main" className="main">
                <div className='section align-center'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Add New Service</h3>
                                    <form method='post' onSubmit={handleService} encType="multipart/form-data" style={{ width: '100%' }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Service Name" onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Short Describtion</label>
                                                <textarea className='form-control' placeholder='Enter Short Description' onChange={(e) => setShort(e.target.value)}></textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Heading</label>
                                                <input type="text" className="form-control" placeholder="Heading" onChange={(e) => setHeading(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Sub Heading</label>
                                            <input type="text" className="form-control" placeholder="Sub Heading" onChange={(e) => setSubHeading(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">Describtion</label>
                                            <textarea className='form-control' placeholder='Enter Description' onChange={(e) => setDescribtion(e.target.value)}></textarea>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">Full Describtion</label>
                                            <textarea className='form-control' placeholder='Enter Description' onChange={(e) => setDescribtion2(e.target.value)}></textarea>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Icon</label>
                                                <input type="text" className="form-control" placeholder="Icons" onChange={(e) => setIcons(e.target.value)} />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">image</label>
                                                <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setImage(e.target.files[0])} />
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

export default AdminAddSercice