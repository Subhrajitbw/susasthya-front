import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
function DoctorProfile() {
    const { slug } = useParams();
    console.log(slug);
    const [data, setData] = useState("");
    const [loc, setLoc] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get(`https://admin.susasthya.com/api/doctor/${slug}`);
            setData(result.data);
        }
        const fetch2 = async () => {
            const result2 = await axios.get(`https://admin.susasthya.com/api/locations/${slug}`);
            setLoc(result2.data);
        }
        fetch();
        fetch2();
    }, [])

    const useItems = loc.map((i) => {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="clinic-content">
                            <h4 className="clinic-name">{i.location}</h4>

                            <div className="clinic-details mb-0">
                                <h5 className="clinic-direction"> <i className="fas fa-map-marker-alt" />{i.address}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="clinic-timing">
                            <div>
                                <p className="timings-days">
                                    <span> {i.from_day} - {i.to_day} </span>
                                </p>
                                <p className="timings-times">
                                    <span>{i.from_time} - {i.to_time}</span>

                                </p>
                            </div>

                        </div>
                    </div>
                    {/* /Clinic Timing */}
                    <div className="col-md-2">
                        <div className="consult-price">
                        &#8377;{i.fees}
                        </div>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <div>
            <div className="content">
                <div className="container">
                    {/* Doctor Widget */}
                    <div className="card">
                        <div className="card-body">
                            <div className="doctor-widget">
                                <div className="doc-info-left">
                                    <div className="doctor-img">
                                        <img src={`https://admin.susasthya.com/storage/${data.avatar}`} className="img-fluid" alt="User Image" />
                                    </div>
                                    <div className="doc-info-cont">
                                        <h4 className="doc-name">{data.name}</h4>
                                        <p className="doc-speciality">{data.specialization}</p>
                                        <div className="clinic-details">
                                            <p className="doc-location"><i className="fas fa-map-marker-alt" /> {data.location}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="doc-info-right">
                                    <div className="clini-infos">
                                        <ul>
                                            <li><i className="fas fa-map-marker-alt" /> {data.location}</li>

                                        </ul>
                                    </div>
                                    <div className="clinic-booking">
                                        <Link className="apt-btn" to={`/appointment/create/slug=${data.id}`} params={{created_by_user_id: data.name, doctor_id: data.id}}>Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Doctor Widget */}
                    {/* Doctor Details Tab */}
                    <div className="card">
                        <div className="card-body pt-0">
                            {/* Tab Menu */}
                            <nav className="user-tabs mb-4">
                                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#doc_locations" data-toggle="tab">Locations</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#doc_business_hours" data-toggle="tab">Business Hours</a>
                                    </li> */}
                                </ul>
                            </nav>
                            {/* /Tab Menu */}
                            {/* Tab Content */}
                            <div className="tab-content pt-0">
                                {/* Overview Content */}
                                <div role="tabpanel" id="doc_overview" className="tab-pane fade show active">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-9">
                                            {/* About Details */}
                                            <div className="widget about-widget">
                                                <h4 className="widget-title">About Me</h4>
                                                <p>{data.overview}</p>
                                            </div>
                                            {/* /About Details */}
                                            {/* Education Details */}

                                        </div>
                                    </div>
                                </div>
                                {/* /Overview Content */}
                                {/* Locations Content */}
                                <div role="tabpanel" id="doc_locations" className="tab-pane fade">
                                    {/* Location List */}
                                    <div className="location-list">

                                        {/* Clinic Content */}
                                        {loc && useItems}
                                    </div>
                                    {/* /Location List */}
                                    {/* Location List */}

                                </div>    

                                    {/* Business Hours Content */}
                                    <div role="tabpanel" id="doc_business_hours" className="tab-pane fade">
                                        <div className="row">
                                            <div className="col-md-6 offset-md-3">
                                                {/* Business Hours Widget */}
                                                <div className="widget business-widget">
                                                    <div className="widget-content">
                                                        <div className="listing-hours">
                                                            <div className="listing-day current">
                                                                <div className="day">Today <span>5 Nov 2019</span></div>
                                                                <div className="time-items">
                                                                    <span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day">
                                                                <div className="day">Monday</div>
                                                                <div className="time-items">
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day">
                                                                <div className="day">Tuesday</div>
                                                                <div className="time-items">
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day">
                                                                <div className="day">Wednesday</div>
                                                                <div className="time-items">
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day">
                                                                <div className="day">Thursday</div>
                                                                <div className="time-items">
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day">
                                                                <div className="day">Friday</div>
                                                                <div className="time-items">
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day">
                                                                <div className="day">Saturday</div>
                                                                <div className="time-items">
                                                                    <span className="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="listing-day closed">
                                                                <div className="day">Sunday</div>
                                                                <div className="time-items">
                                                                    <span className="time"><span className="badge bg-danger-light">Closed</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Business Hours Widget */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours Content */}
                                </div>
                            </div>
                        </div>
                        {/* /Doctor Details Tab */}
                    </div>
                </div>
            </div>
    )
}

export default DoctorProfile