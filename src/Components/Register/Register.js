import React, {useEffect, useState} from 'react'
import "../assets/css/style.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [phone_number, setPhone_number] = useState('');
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          };
          
            const { data } = await axios.post(
              "https://admin.susasthya.com/api/register",
              {
                name,
                email,
                password,
                password_confirmation,
                phone_number
              },
              config
            );
            
            window.location.assign("/login");
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div class="account-page">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            {/* Register Content */}
                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Register" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>Patient Register <Link to="/register/doctor">Are you a Doctor?</Link></h3>
                                        </div>
                                        {/* Register Form */}
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group form-focus">
                                                <input type="text" className="form-control floating" onChange={(e) => setName(e.target.value)} />
                                                <label className="focus-label">Name</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="email" className="form-control floating" onChange={(e) => setEmail(e.target.value)} />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" className="form-control floating" onChange={(e) => setPhone_number(e.target.value)}/>
                                                <label className="focus-label">Mobile Number</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" className="form-control floating" onChange={(e) => setPassword(e.target.value)}/>
                                                <label className="focus-label">Create Password</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" className="form-control floating" onChange={(e) => setPassword_confirmation(e.target.value)}/>
                                                <label className="focus-label">Confirm Password</label>
                                            </div>
                                            <div className="text-right">
                                                <Link className="forgot-link" to="/login">Already have an account?</Link>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
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
                                        </form>
                                        {/* /Register Form */}
                                    </div>
                                </div>
                            </div>
                            {/* /Register Content */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </div>
    )
}

export default Register