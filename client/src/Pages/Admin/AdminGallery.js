import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const AdminGallery = () => {
    const params = useParams();
    const id = params.id
    const [gallery, setGallery] = useState([]);
    const [auth] = useAuth();
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
 const deleteGalleryImage = async (id) => {
    try {
        const {data} = await axios.delete(`/api/v1/gallery/delete/${id}`, {
            headers:{
                "Authorization" : auth.token
            }
        })
        if (data?.success) {
            alert(data?.message)
            window.location.reload()
        }
    } catch (error) {
        alert(error?.responce?.data?.message)
    }
 }
    useEffect(() => {
        getGalleryImage(id)
    }, [id])
    return (
        <AdminLayout>
            <div className='container'>
                <div className='row'>
                    {gallery.map((g, i) => (
                        <div className='col-md-4 col-sm-6 col-lg-4'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={`/static/gallerys/${g.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <button className="btn btn-danger" onClick={() => deleteGalleryImage(g.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminGallery
