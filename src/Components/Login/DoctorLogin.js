import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
function DoctorLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(`https://admin.susasthya.com/api/doctor/login`,
                {
                    email,
                    password,
                },
                config
            );
            const user = data.user.name;
            console.log(data.user.name)
            localStorage.setItem("name", user);
            localStorage.setItem("userInfo", JSON.stringify(data));
            window.location.assign('/')
        } catch (error) {
            console.log(error)
        }
    }
return (
    <div className='account-page'>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {/* Login Tab Content */}
                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src="/assets/img/login-banner.png" className="img-fluid" alt="Doccure Login" />
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Doctor Login <span>Medibuddy</span></h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group form-focus">
                                            <input type="email" className="form-control floating" onChange={(e) => setEmail(e.target.value)} />
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <div className="form-group form-focus">
                                            <input type="password" className="form-control floating" onChange={(e) => setPassword(e.target.value)} />
                                            <label className="focus-label">Password</label>
                                        </div>
                                        <div className="text-right">
                                            <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                        <div className="login-or">
                                            <span className="or-line" />
                                            <span className="span-or">or</span>
                                        </div>
                                        <div className="row form-row social-login">
                                            <div className="col-6">
                                                <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> Login</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1" /> Login</a>
                                            </div>
                                        </div>
                                        <div className="text-center dont-have">Don’t have an account? <Link to="/doctor/register">Register</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /Login Tab Content */}
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default DoctorLogin