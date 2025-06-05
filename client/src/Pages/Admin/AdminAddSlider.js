import React, { useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddSlider = () => {
    const [heading, setHeading] = useState("")
    const [describtion, setDescribtion] = useState("")
    const [file, setFile] = useState("")
    const [auth] = useAuth();
    const navigate = useNavigate()

    const handleSlider = async (e) => {
        e.preventDefault();
        try {
            const sliderData = new FormData();
            sliderData.append('heading', heading);
            sliderData.append('describtion', describtion);
            sliderData.append('img', file);

            const { data } = await axios.post('https://modular-vision-rea-backend.onrender.com/api/v1/slider/create', sliderData, {
                headers: {
                    "Authorization": auth.token
                }
            });

            if (data?.success) {
                alert(data?.message);
                navigate('/admin/slider')
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    return (
        <AdminLayout>
            <form method='post' onSubmit={handleSlider} encType="multipart/form-data">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Heading</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Heading" onChange={(e) => setHeading(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Describtion</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Descriptions" onChange={(e) => setDescribtion(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">image</label>
                        <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Slider</button>
            </form>
        </AdminLayout>
    )
}

export default AdminAddSlider