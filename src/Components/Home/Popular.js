import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

function Popular() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get('https://admin.susasthya.com/api/blogs');
            setData(result.data);
        }
        fetch();
    }, [])

    const useItems = data.map((i) => {
        return (
            <div className="profile-widget">
                <div className="doc-img">
                    <Link to={`/blogs/slug=${i.slug}`} params={{ slug: i.slug }}>
                        <img className="img-fluid" alt="User Image" src={`https://admin.susasthya.com/storage/${i.image}`} />
                    </Link>

                </div>
                <div className="pro-content">
                    <h3 className="title">
                        <Link to={`/blogs/slug=${i.slug}`} params={{ slug: i.slug }}>{i.title}</Link>

                    </h3>
                    {/* <p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                    <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating">(17)</span>
                    </div> */}
                    <ul className="available-info">
                        <p>{i.excerpt}</p>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <div className="col-6">
                            <Link to={`/blogs/slug=${i.slug}`} params={{ slug: i.slug }} class="btn view-btn">Read</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    })
    const settings2 = {
        arrows: true,
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 0,
        variableWidth: true,
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
    };
    return (
        <div>
            {/* Popular Section */}
            <section className="section section-doctor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-header ">
                                <h2>Read The latest Blogs</h2>
                                <p>Lorem Ipsum is simply dummy text </p>
                            </div>
                            <div className="about-content">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                                <Link to="/blogs">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="doctor-slider slider">
                                {/* Doctor Widget */}
                                <Slider {...settings2}>
                                    {data && useItems}
                                </Slider>
                                {/* Doctor Widget */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Popular Section */}
        </div>
    )
}

export default Popular