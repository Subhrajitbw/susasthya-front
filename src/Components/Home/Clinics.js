import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

function Clinics() {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get('https://admin.susasthya.com/api/categories')
            setData(result.data)
        }
        fetch()
    }, [])

    const useItems = data.map((i) => {
        return (
            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={`https://admin.susasthya.com/storage/${i.category_image}`} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true" /></span>
                </div>
                <p>{i.name}</p>
            </div>
        )
    })

    const settings = {
        arrows: false,
        dots: true,
        pauseOnHover: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            {/* Clinic and Specialities */}
            <section className="section section-specialities">
                <div className="container-fluid">
                    <div className="section-header text-center">
                        <h2>Categories</h2>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            {/* Slider */}

                            <div className="specialities-slider slider">
                                {/* Slider Item */}
                                <Slider {...settings}>

                                    {data && useItems}
                                </Slider>
                            </div>

                            {/* /Slider */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Clinic and Specialities */}
        </div>
    )
}

export default Clinics