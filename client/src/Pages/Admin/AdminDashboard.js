import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
    const [auth] = useAuth()
    const [project, setProject] = useState("");
    const [service, setService] = useState("");
    const [appointment, setAppointment] = useState("");
    const [contact, setContact] = useState("");

    const countPorject = async () => {
        try {
            const {data} = await axios.get(`/api/v1/project/getcountProject`, {
                headers:{
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                setProject(data?.results[0].count)
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }
    const countSercice = async () => {
        try {
            const {data} = await axios.get(`/api/v1/service/getcountService`, {
                headers:{
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                setService(data?.results[0].count)
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }
    const countAppointment = async () => {
        try {
            const {data} = await axios.get(`/api/v1/appointment/getCountAppointment`, {
                headers:{
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                setAppointment(data?.results[0].count)
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }
    const countConatct = async () => {
        try {
            const {data} = await axios.get(`/api/v1/appointment/getCountContact`, {
                headers:{
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                setContact(data?.results[0].count)
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }

    useEffect(()=> {
        countPorject();
        countSercice();
        countConatct();
        countAppointment();
    }, [])
    return (
        <AdminLayout>
            <h1>Welcome Back {auth.user[0].name} </h1>

            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-12 col-xxl-4 order-3 order-md-2">
                        <div className="row">
                            <div className="col-6 mb-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                            <div className="avatar flex-shrink-0" style={{ fontSize: '90px' }}>
                                                <i className="fa-sharp-duotone fa-solid fa-calendar-check"></i>
                                            </div>
                                        </div>
                                        <p className="mb-1">Appointments</p>
                                        <h4 className="card-title mb-3">{appointment}</h4>
                                        {/* <small className="text-danger fw-medium"><i className="bx bx-down-arrow-alt"></i> -14.82%</small> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                            <div className="avatar flex-shrink-0" style={{ fontSize: '90px' }}>
                                                <i className="fa-sharp-duotone fa-solid fa-address-card"></i>
                                            </div>

                                        </div>
                                        <p className="mb-1">Contact</p>
                                        <h4 className="card-title mb-3">{contact}</h4>
                                        {/* <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +28.14%</small> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                            <div className="avatar flex-shrink-0" style={{ fontSize: '90px' }}>
                                            <i class="fa-sharp fa-solid fa-server"></i>
                                            </div>
                                        </div>
                                        <p className="mb-1">Srvices</p>
                                        <h4 className="card-title mb-3">{service}</h4>
                                        {/* <small className="text-danger fw-medium"><i className="bx bx-down-arrow-alt"></i> -14.82%</small> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                            <div className="avatar flex-shrink-0" style={{ fontSize: '90px' }}>
                                            <i class="fa-sharp-duotone fa-solid fa-list-check"></i>                                            </div>

                                        </div>
                                        <p className="mb-1">Projects</p>
                                        <h4 className="card-title mb-3">{project}</h4>
                                        {/* <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +28.14%</small> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard