import { specialCharMap } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function SearchDoctor() {
    const [specialities, setSpecialities] = useState([]);
    const [data, setData] = useState([]);
    const [specialization, setSpe] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get(`https://admin.susasthya.com/api/doctor`);
            setData(result.data);
            const result2 = await axios.get(`https://admin.susasthya.com/api/categories`);
            setSpecialities(result2.data)
        }
        fetch();
    }, [])

    const useItems = specialities.map((i) => {
        return (
            <div>
                <label className="custom_check">
                    <input type="radio" name="select_specialist" onChange={(e) => setSpe(i.name)} />
                    <span className="checkmark" /> {i.name}
                </label>
            </div>
        )
    })

    const useItems2 = data.map((i) => {
        if (specialization === "") {
            return (
                <div className="card">
                    <div className="card-body">
                        <div className="doctor-widget">
                            <div className="doc-info-left">
                                <div className="doctor-img">
                                    <a href="doctor-profile.html">
                                        <img src={`https://admin.susasthya.com/storage/${i.avatar}`} className="img-fluid" alt="User Image" />
                                    </a>
                                </div>
                                <div className="doc-info-cont">
                                    <h4 className="doc-name"><a href="doctor-profile.html">{i.name}</a></h4>
                                    <p className="doc-speciality">{i.specialization}</p>
                                    <h5 className="doc-department">{i.department}</h5>

                                    <div className="clinic-details">
                                        <p className="doc-location"><i className="fas fa-map-marker-alt" /> {i.location}</p>
                                    </div>
                                    {/* <div className="clinic-services">
                                    <span>Dental Fillings</span>
                                    <span> Whitneing</span>
                                </div> */}
                                </div>
                            </div>
                            <div className="doc-info-right">
                                <div className="clinic-booking">
                                <Link className="view-pro-btn" to={`/profile/slug=${i.id}`} params={{ slug: i.id }}>View Profile</Link>
                                    {(!localStorage.getItem("userInfo")) &&
                                        <Link className="apt-btn" to="/login">Login to Book Appointment</Link>
                                    }
                                    {localStorage.getItem("userInfo") &&
                                        <Link className="apt-btn" to={`/appointment/create/created_by_user_id=${i.name}/doctor_id=${i.id}`} params={{ created_by_user_id: i.name, doctor_id: i.id }}>Book Appointment</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        if (specialization === i.department) {
            return (
                <div className="card">
                    <div className="card-body">
                        <div className="doctor-widget">
                            <div className="doc-info-left">
                                <div className="doctor-img">
                                    <a href="doctor-profile.html">
                                        <img src={`https://admin.susasthya.com/storage/${i.avatar}`} className="img-fluid" alt="User Image" />
                                    </a>
                                </div>
                                <div className="doc-info-cont">
                                    <h4 className="doc-name"><a href="doctor-profile.html">{i.name}</a></h4>
                                    <p className="doc-speciality">{i.specialization}</p>
                                    <h5 className="doc-department">{i.department}</h5>

                                    <div className="clinic-details">
                                        <p className="doc-location"><i className="fas fa-map-marker-alt" /> {i.location}</p>
                                    </div>
                                    {/* <div className="clinic-services">
                                    <span>Dental Fillings</span>
                                    <span> Whitneing</span>
                                </div> */}
                                </div>
                            </div>
                            <div className="doc-info-right">
                                <div className="clinic-booking">
                                    <Link className="view-pro-btn" to={`/profile/slug=${i.id}`} params={{ slug: i.id }}>View Profile</Link>
                                    {(!localStorage.getItem("userInfo")) &&
                                        <Link className="apt-btn" to="/login">Login to Book Appointment</Link>
                                    }
                                    {localStorage.getItem("userInfo") &&
                                        <Link className="apt-btn" to={`/appointment/create/created_by_user_id=${i.name}/doctor_id=${i.id}`} params={{ created_by_user_id: i.name, doctor_id: i.id }}>Book Appointment</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    })
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                        {/* Search Filter */}
                        <div className="card search-filter">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Search Filter</h4>
                            </div>
                            <div className="card-body">

                                <div className="filter-widget">
                                    <h4>Select Specialist</h4>
                                    {specialities && useItems}
                                </div>
                                <div className="btn-search">
                                    <button type="button" className="btn btn-block">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* /Search Filter */}
                    </div>
                    <div className="col-md-12 col-lg-8 col-xl-9">
                        {data && useItems2}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDoctor