import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useAuth } from '../../context/auth'
import axios from 'axios'

const AdminContact = () => {
    const [contact, setContact] = useState([])
    const [auth] = useAuth()
    const getContacts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/appointment/get`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setContact(data?.results);
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }
    useEffect(() => {
        getContacts()
    }, [])
    return (
        <AdminLayout>
            <main id="main" className="main bg-light" style={{ background: '#fff' }}>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Contacts</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contact?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.name}</td>
                                                    <th>{c.email}</th>
                                                    <td>{c.subject}</td>
                                                    <td>{c.message}</td>
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

export default AdminContact