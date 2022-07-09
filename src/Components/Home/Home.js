import React, { useState } from 'react'
import "../assets/css/style.css";
import Slider from 'react-slick'
import Clinics from './Clinics';
import Popular from './Popular';
import Features from './Features';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Home() {
    const navigate = useNavigate();

    const [term, setTerm] = useState([]);
    console.log(term);
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`https://admin.susasthya.com/api/search/${term}`);
            navigate(`/doctor/search/slug=${term}`, { state: { data: data } });
            //window.location.assign('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <section className="section section-search">
                <div className="container-fluid">
                    <div className="banner-wrapper">
                        <div className="banner-header text-center">
                            <h1>Know Your Disease</h1>
                            {/* <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p> */}
                        </div>
                        {/* Search */}
                        <div className="search-box">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group search-location">
                                    <input type="text" className="form-control" placeholder="Search Location" />
                                    <span className="form-text">Based on your Location</span>
                                </div>
                                <div className="form-group search-info">
                                    <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" onChange={(e) => setTerm(e.target.value)} />
                                    <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                                </div>
                                <button type="submit" className="btn btn-primary search-btn"><i className="fas fa-search" /> <span>Search</span></button>
                            </form>
                        </div>
                        {/* /Search */}
                    </div>
                </div>
            </section>
            <div>

                <Clinics />
                <Popular />
                <Features />

            </div>
        </div>
    )
}

export default Home