import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./blogs.css";
import {Link} from 'react-router-dom'
function Blogs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get('https://admin.susasthya.com/api/blogs');
            setData(result.data);
        }
        fetch();
    }, []);

    const useItems = data.map((i) => {
        return (
            <div class="col-md-4 my-2 p-5">
                <div class="card-content">
                    <div class="card-img">
                        <img src={`https://admin.susasthya.com/storage/${i.image}`} alt="" />
                        
                    </div>
                    <div class="card-desc">
                        <h3>{i.title}</h3>
                        <p>{i.excerpt}</p>
                        <Link to={`/blogs/slug=${i.slug}`} params = {{slug: i.slug}} class="btn-card">Read</Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div class="container my-4 py-5 ">
            <div class="row">
                {data && useItems}
            </div>
        </div>
    )
}

export default Blogs