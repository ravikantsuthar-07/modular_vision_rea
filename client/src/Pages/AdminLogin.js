import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';
import { useAuth } from '../context/auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/auth/login', { email, password });
            if (data?.success) {
                setAuth({
                    ...auth,
                    user: data?.result,
                    token: data?.token
                })
                localStorage.setItem('auth', JSON.stringify(data));
                alert(data?.message);
                navigate('/admin/dashboard');
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    return (
        <section className="vh-100" style={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"} 
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form method='post' onSubmit={handleLogin}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" onChange={(e) => setEmail(e.target.value)} />
                                <label className="form-label" for="form3Example3">Email address</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" for="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                    style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div> */}
        </section>
    )
}

export default AdminLogin;