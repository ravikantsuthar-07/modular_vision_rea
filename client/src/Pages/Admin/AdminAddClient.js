import React, { useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddClient = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [auth] = useAuth();
    const navigate = useNavigate()

    const handleClient = async (e) => {
        e.preventDefault();
        try {
            const clientData = new FormData();
            clientData.append('name', name);
            clientData.append('img', image);
            const { data } = await axios.post(`/api/v1/client/create`, clientData, {
                headers: {
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                alert(data?.message);
                navigate('/admin/clients');
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
                                    <h3>Add New Client</h3>
                                    <form method='post' onSubmit={handleClient} encType="multipart/form-data" style={{ width: '100%' }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Name</label>
                                                <input type="text" className="form-control" placeholder="Clients Name" onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">image</label>
                                                <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Client</button>
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

export default AdminAddClient