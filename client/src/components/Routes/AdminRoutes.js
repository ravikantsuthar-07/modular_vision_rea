import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Spinner from '../Spinner';

const AdminRoutes = () => {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/admin-auth',
                {
                    headers: {
                        "Authorization": auth?.token
                    }
                }
            )
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner path='' />
}

export default AdminRoutes