import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminServices = () => {
    const [service, setService] = useState([]);
    const [auth] = useAuth();
    const navigate = useNavigate();
    const getServices = async () => {
        try {
            const { data } = await axios.get(`/api/v1/service/getAdmin`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setService(data?.results)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const updateServiceStatus = async (id, status) => {
        try {
            let send;
            if (status) {
                send = 0
            } else {
                send = 1;
            }
            
            const { data } = await axios.put(`/api/v1/service/updateStatus/${id}`, { status: send }, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                console.log(data);
                alert(data?.message)
                window.location.reload();
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const deleteService = async (id) => {
        try {
            const { data } = await axios.delete(`/api/v1/service/delete/${id}`, {
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

    useEffect(() => {
        getServices();
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
                                    <h5 className="card-title">Service</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Main Describtion</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {service?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.name}</td>
                                                    <td>{c.heading}</td>
                                                    <td>{c.shortDesc}</td>
                                                    <td><img src={`/static/services/${c.image}`} alt='aboutImage' width={100} /></td>
                                                    <td>
                                                        <button type='buttton' className={c.status ? 'btn btn-primary' : 'btn btn-success'} onClick={() => { updateServiceStatus(c.id, c.status) }}>{c.status ? 'Activate' : 'De Activate'}</button>
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/admin/edit_service/${c.id}`)} >Update</button>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteService(c.id)}>Delete</button>
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

export default AdminServices