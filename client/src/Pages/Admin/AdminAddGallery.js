import React, { useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const AdminAddGallery = () => {
    const [image, setImage] = useState("");
    const [auth] = useAuth();
    const navigate = useNavigate()
    const params = useParams();
    const productId = params.id;
    const handleGallery = async (e) =>{
        e.preventDefault();
        try {
            const galleryData = new FormData();
            galleryData.append('img', image);
            const {data} = await axios.post(`/api/v1/gallery/create/${productId}`, galleryData, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate(`/admin/projects`)
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
                                    <h3>Add New Product Image</h3>
                                    <form method='post' onSubmit={handleGallery} encType="multipart/form-data" style={{ width: '100%' }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">image</label>
                                                <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Image</button>
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

export default AdminAddGallery