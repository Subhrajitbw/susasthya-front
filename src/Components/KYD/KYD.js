import React, { useState, useEffect } from 'react'
import "./kyd.css"
import { Link } from "react-router-dom"
import axios from 'axios';
function KYD() {
  let info = "", created_by_user_id ="";
  if (localStorage.getItem('userInfo')) {
    info = JSON.parse(localStorage.getItem('userInfo'));
    created_by_user_id = info.user.id;
  }

  
  const [problem, setProb] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preffered_contact_method, setPreffered] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      await axios.post(`https://admin.susasthya.com/api/know-your-disease`,
        {
          problem,
          age,
          gender,
          created_by_user_id,
          preffered_contact_method
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
          <input id="name" className="input-text js-input" type="text" required onChange={(e) => setProb(e.target.value)} />
          <label className="label" htmlFor="name">Problem</label>
        </div>
        <div className="form-field col-lg-6 ">
          <input id="age" className="input-text js-input" type="text" required onChange={(e) => setAge(e.target.value)} />
          <label className="label" htmlFor="email">Age</label>
        </div>



        <div className="form-field col-lg-6">
          <select class="custom-select" id="gender2" onChange={(e) => setGender(e.target.value)}>
            <option selected>Gender</option>
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
          </select>
        </div>
        <div className="form-field col-lg-6">
          <select class="custom-select" id="gender2" onChange={(e) => setPreffered(e.target.value)}>
            <option selected disabled>Preferred Contact Method</option>
            <option value="Phone" >Phone</option>
            <option value="WhatsApp" >WhatsApp</option>
          </select>
        </div>

        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Submit</button>

      </form>
    </div>
  )
}

export default KYD