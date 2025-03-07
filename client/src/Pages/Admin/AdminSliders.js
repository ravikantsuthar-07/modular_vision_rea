import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios'
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminSliders = () => {
    const [slider, setSlider] = useState([]);
    const [auth] = useAuth();

    const navigator = useNavigate()

    const gettingSlider = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/getAdmin', {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setSlider(data?.results);
            } else {
                alert(data?.message)
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }
    useEffect(() => {
        gettingSlider();
        // eslint-disable-next-line
    }, []);

    const updateSliderStatus = async (id, status) => {
        try {
            let send;
            if (status === 'inactive') {
                send = 'active';
            } else {
                send = 'inactive';
            }
            const { data } = await axios.put(`/api/v1/slider/updateStatus/${id}`, { status: send }, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message)
                window.location.reload();
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const deleteSliders = async (id) => {
        try {
            const { data } = await axios.delete(`/api/v1/slider/delete/${id}`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    return (
        <AdminLayout>
            <h1 className='text-center'>Sliders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {slider.map((s, i) => (

                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{s.heading}</td>
                            <td>{s.description}</td>
                            <td><img src={`http://localhost:8001/static/sliders/${s.image}`} width={100} height={100} alt='sliders' /></td>
                            <td>
                                <button type='buttton' className={s.status === 'active' ? 'btn btn-success' : 'btn btn-primary'} onClick={() => { updateSliderStatus(s.id, s.status) }}>{s.status === "inactive" ? 'De Activate' : 'Activate'}</button>
                                <button className='btn btn-primary' onClick={() => navigator(`/admin/edit_slider/${s.id}`)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => deleteSliders(s.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    )
}

export default AdminSliders