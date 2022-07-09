import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';
import {useParams} from 'react-router-dom';
function Booking() {
  const {doctor_id} = useParams();
  console.log(doctor_id);
  const {created_by_user_id} = useParams();
  const info = JSON.parse(localStorage.getItem('userInfo'));
  const user_id = info.user.patient_id;
  const [date, setProb] = useState("");
  const [appointment_time, setAge] = useState("");
  const [remarks, setGender] = useState("");
  const appointment_date = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      await axios.post(`https://admin.susasthya.com/api/appointment/create`,
        {
          appointment_date,
          appointment_time,
          remarks,
          created_by_user_id,
          doctor_id,
          user_id,
        },
        config
      );
      window.location.assign('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div class="container my-4 py-5 ">
      <h3 className='text-center'>Know Your Disease</h3>
      <form className="contact-form row justify-content-center" onSubmit={handleSubmit}>
        <div className="form-field col-lg-6">
          <input id="name" className="input-text js-input" type="date" required onChange={(e) => setProb(e.target.value)} />
          <label className="label" htmlFor="name">Appointment Date</label>
        </div>
        <div className="form-field col-lg-6 ">
          <input id="age" className="input-text js-input" type="time" required onChange={(e) => setAge(e.target.value)} />
          <label className="label" htmlFor="email">Appoinment Time</label>
        </div>
        <div className="form-field col-lg-6 ">
          <input id="age" className="input-text js-input" type="text" required onChange={(e) => setGender(e.target.value)} />
          <label className="label" htmlFor="email">Remarks</label>
        </div>
        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Submit</button>

      </form>
    </div>
  )
}

export default Booking