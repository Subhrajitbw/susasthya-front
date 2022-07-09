import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

export default function List() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetch= async() => {
            const response = await axios.get(`https://admin.susasthya.com/api/list/patients`);
            setUsers(response.data);
            console.log(response.data)
        }
        fetch();
    }, [])


    const useItems = users.map((i) => {
        return(
            <tr>
      
      <td>{i.first_name} {i.middle_name} {i.last_name}</td>
      <td>{i.email}</td>
      <td>{i.phone}</td>
      <td>{i.patient_id}</td>
      <td><Link class="btn btn-primary font-weight-bold" to={`/printform/slug=${i.patient_id}`} params={{ slug: i.patient_id }} target="_blank" rel="noopener noreferrer"s>View More</Link></td>
    </tr>
        )
    })

    return (
        <div class="container text-center justify-content-center my-5 p-5">
        <table class="table">
  <thead>
    <tr>
      <th scope="col" class="border-top-0">Name</th>
      <th scope="col" class="border-top-0">Email</th>
      <th scope="col" class="border-top-0">Phone</th>
      <th scope="col" class="border-top-0">Patient Id</th>
      <th scope="col" class="border-top-0">Action</th>

    </tr>
  </thead>
  <tbody>
      {users && useItems}
    </tbody>
    </table>
    </div>
    )
}