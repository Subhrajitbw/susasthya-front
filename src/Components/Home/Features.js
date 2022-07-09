import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

function Features() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get('https://admin.susasthya.com/api/services')
            setData(result.data);
        }
        fetch();
    }, [])

    const useItems = data.map((i) => {
        return (
            <div className="feature-item text-center">
                <img src={`https://admin.susasthya.com/storage/${i.image}`} className="img-fluid" alt="Feature" />
                <p>{i.Title}</p>
            </div>
        )
    })

    const settings3 = {
        arrows: false,
        dots: true,
        pauseOnHover: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 0,
        variableWidth: true,
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
    };
    return (
        <div>
            {/* Availabe Features */}
            <section className="section section-features">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 features-img">
                            <img src="assets/img/features/feature.png" className="img-fluid" alt="Feature" />
                        </div>
                        <div className="col-md-7">
                            <div className="section-header">
                                <h2 className="mt-2">Our Services</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <div className="features-slider slider">
                                <Slider {...settings3}>
                                   {data && useItems}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Availabe Features */}
        </div>
    )
}

export default Features