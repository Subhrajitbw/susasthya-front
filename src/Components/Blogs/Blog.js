import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./blogs.css";
function Blog() {
    const { slug } = useParams();
    console.log(slug);
    const [data, setData] = useState('');
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get(`https://admin.susasthya.com/api/blogs/${slug}`)
            setData(result.data);
            console.log(data);
        }
        fetch();
    }, []);
    return (
        <div class="container m-4 p-4 text-blog">

            <img class="p-2" src={`https://admin.susasthya.com/storage/${data.image}`} alt="" />

            <div class="">
                <h3 class="">{data.title}</h3>
                <div
                    dangerouslySetInnerHTML={{ __html: data.body }}
                />
            </div>
        </div>
    )
}

export default Blog