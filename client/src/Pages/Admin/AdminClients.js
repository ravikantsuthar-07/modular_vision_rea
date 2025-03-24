import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const AdminClients = () => {
    const [client, setClient] = useState([]);
    const [auth] = useAuth();
    const navigate = useNavigate();
    const getClients = async () => {
        try {
            const { data } = await axios.get(`/api/v1/client/getAdmin`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setClient(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }

    const updateClientStatus = async (id, status) => {
        try {
            let send
            if (status) {
                send = 0
            } else {
                send = 1
            }
            const { data } = await axios.put(`/api/v1/client/updateStatus/${id}`, { status: send }, {
                headers: {
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


    const deleteClient = async (id) => {
        try {
            const { data } = await axios.delete(`/api/v1/client/delete/${id}`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload()
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    useEffect(() => {
        getClients()
    }, [])
    return (
        <AdminLayout>
            <main id="main" className="main bg-light" style={{ background: '#fff' }}>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Clients</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {client?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.name}</td>
                                                    <td><img src={`/static/clients/${c.image}`} alt='clientImage' width={100} /></td>
                                                    <td>
                                                        <button type='buttton' className={c.status ? 'btn btn-primary' : 'btn btn-success'} onClick={() => { updateClientStatus(c.id, c.status) }}>{c.status ? 'Activate' : 'De Activate'}</button>
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/admin/edit_client/${c.id}`)} >Update</button>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteClient(c.id)}>Delete</button>
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

export default AdminClients