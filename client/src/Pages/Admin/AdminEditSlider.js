import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate, useParams } from 'react-router-dom';

const AdminEditSlider = () => {
    const [heading, setHeading] = useState("")
    const [describtion, setDescribtion] = useState("")
    const [file, setFile] = useState("")
    const [auth] = useAuth();
    const navigator = useNavigate();
    const params = useParams()
    const id = params.id;
    const getSlider = async () => {
        try {
            const { data } = await axios.get(`/api/v1/slider/getSingleAdmin/${id}`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setHeading(data?.results[0].heading);
                setDescribtion(data?.results[0].description);
            } else {
                alert(data?.message)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const handleSlider = async (e) => {
        e.preventDefault();
        try {
            const sliderData = new FormData();
            sliderData.append('heading', heading);
            sliderData.append('describtion', describtion);
            sliderData.append('img', file);

            const { data } = await axios.put(`/api/v1/slider/update/${id}`, sliderData, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigator('/admin/sliders');
            } else {
                alert(data?.message);
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        getSlider();
        // eslint-disable-next-line
    }, []);
    return (
        <AdminLayout>
            <main id="main" className="main">
                
            <div className='section align-center'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h3>Edit Slider # {id}</h3>
                                <form method='post' onSubmit={handleSlider} encType="multipart/form-data" style={{ width: '100%' }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Heading</label>
                                            <input type="text" className="form-control" id="inputEmail4" value={heading} placeholder="Heading" onChange={(e) => setHeading(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">Describtion</label>
                                            <input type="text" className="form-control" id="inputPassword4" value={describtion} placeholder="Descriptions" onChange={(e) => setDescribtion(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">image</label>
                                            <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setFile(e.target.files[0])} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Edit Slider</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </AdminLayout >
    )
}

export default AdminEditSlider