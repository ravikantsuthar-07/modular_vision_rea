import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAboutUs = () => {
    // const navigate = useNavigate();
    const [about, setAbout] = useState([]);
    const [auth] = useAuth();
    const navigate = useNavigate()

    const getAboutUsDetails = async () => {
        try {
            const { data } = await axios.get(`/api/v1/about/get`, {
                headers: {
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                setAbout(data?.results)
            }
        } catch (error) {
            alert(error?.data?.response?.message);
        }
    }

    const deleteAbout = async (id) => {
        try {
            const {data} = await axios.delete(`/api/v1/about/delete/${id}`, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message)
                window.location.reload()
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getAboutUsDetails();
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
                                    <h5 className="card-title">About</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Main Describtion</th>
                                                <th scope="col">Describtion</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {about?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.head}</td>
                                                    <td>{c.decs1}</td>
                                                    <td>{c.decs2}</td>
                                                    <td>{c.year}</td>
                                                    <td><img src={`/static/abouts/${c.image}`} alt='aboutImage' width={100} /></td>
                                                    <td> 
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/admin/edit_about/${c.id}`)} >Update</button>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteAbout(c.id)}>Delete</button>
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

export default AdminAboutUs