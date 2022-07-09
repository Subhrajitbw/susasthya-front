import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/style.css"

function ProfileSettings() {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
    const info = JSON.parse(localStorage.getItem('userInfo'));
    console.log(info);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get(`https://admin.susasthya.com/api/appointments/${info.user.patient_id}`)
            setData(result.data);
        }
        fetch();
    }, [])

    const useItems = data.map((i) => {
        return (
            <tr>
                <td>
                    <h2 className="table-avatar">
                        <a href="doctor-profile.html">{i.created_by_user_id}</a>
                    </h2>
                </td>
                <td>{formatter.format(Date.parse(i.appointment_date))}<span className="d-block text-info">{i.appointment_time}</span></td>
                <td>{formatter.format(Date.parse(i.created_at))}</td>
                {i.status == "option1" &&
                    <td><span className="badge badge-pill bg-success-light">Confirmed</span></td>
                }
                {i.status == "option2" &&
                    <td><span className="badge badge-pill bg-warning-light">Pending</span></td>
                }
                {i.status == "option3" &&
                    <td><span className="badge badge-pill bg-danger-light">Rejected</span></td>
                }
                
            </tr>

        )
    })
    return (
        <div class="content">
            <div className="container-fluid">
                <div className="row">
                    {/* Profile Sidebar */}
                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                        <div className="profile-sidebar">
                            <div className="widget-profile pro-widget-content">
                                <div className="profile-info-widget">
                                    <a href="#" className="booking-doc-img">
                                        <img src={`https://admin.susasthya.com/storage/${info.user.avatar}`} alt="User Image" />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>{info.user.name}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-widget">
                                <nav className="dashboard-menu">
                                    <ul>
                                        <li className="active">
                                            <Link to="/patient/profile-settings">
                                                <i className="fas fa-columns" />
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <Link to="/reset-password">
                                                <i className="fas fa-lock" />
                                                <span>Change Password</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/logout">
                                                <i className="fas fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* / Profile Sidebar */}
                    <div className="col-md-7 col-lg-8 col-xl-9">
                        <div className="card">
                            <div className="card-body pt-0">
                                {/* Tab Menu */}
                                <nav className="user-tabs mb-4">
                                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /Tab Menu */}
                                {/* Tab Content */}
                                <div className="tab-content pt-0">
                                    {/* Appointment Tab */}
                                    <div id="pat_appointments" className="tab-pane fade show active">
                                        <div className="card card-table mb-0">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Doctor</th>
                                                                <th>Appointment Date</th>
                                                                <th>Booking Date</th>

                                                                <th>Status</th>
                                                                <th />
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {data && useItems}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Appointment Tab */}
                                </div>
                                {/* Tab Content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileSettings