import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import "./style.css";
import "./print.css"
import axios from "axios"
import Header from '../Header/Header';
function PrintForm() {
    
    const { slug } = useParams();
    let [date, setDate] = useState("");
    let [rel, setRel] = useState("");
    
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    // today = dd + '/' + mm + '/' + yyyy;
    //const data = JSON.parse(localStorage.getItem("data"));

    const [data, setUsers] = useState("");
    
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "2-digit"
      });

    useEffect(() => {
        const fetch = async() => {
        const response = await axios.get(`https://admin.susasthya.com/api/print/${slug}`)
        setUsers(response.data);
        
          setDate(formatter.format(Date.parse(response.data.created_at)));
          setRel(response.data.relationship_with_member.replace(/\[|]|"/gi, ""))
        }
        fetch();
    },[])
 
    const generatePDF = () => {

        const report = new jsPDF('landscape', 'px', 'a2');
        report.html(document.querySelector('.big')).then(() => {
            report.save(`${data.first_name}_${data.last_name}_${data.patient_id}.pdf`);
        });
    }



    return (
        
        <>
        <div class="text-center my-5">
            <button class="btn btn-primary font-weight-bold" onClick={generatePDF}>Print</button>
            </div>
            <div class="container big">
                <h3 className='mt-5 float-right'>Date: {date}</h3>
                
                <div class="container align-items-center justify-content-center">
                    <img src='/assets/img/susasthya.jpg' className='img-thumbnail img' />
                    <h3 className='mt-5'>Membership Form</h3>
                    <h3 className='mt-5'>Form ID:  {data.member_form_id}</h3>
                </div>
                <hr />
                <div className='col-8 d-inline-block justify-content-center'>
                    <form className="contact-form row ">

                        <h3 className='pt-2 mt-2'><u>Personal Details</u></h3>
                        <div className="form-field col-lg-6 text-center">

                        </div>
                        <hr />

                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" value={data.first_name} />
                            <label className="label" htmlFor="name">First Name</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" value={data.middle_name} />
                            <label className="label" htmlFor="name">Middle Name</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" value={data.last_name} />
                            <label className="label" htmlFor="name">Last Name</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="email" value={data.email} />
                            <label className="label" htmlFor="email">Email</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="text" value={data.phone} />
                            <label className="label" htmlFor="phone number">Phone Number</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="date" value={data.dob} />
                            <label className="label" htmlFor="phone number">Date of Birth</label>
                        </div>
                        <div className="form-field col-lg-6 mt-5 pt-5">
                            <input id="age" className="input-text js-input" type="text" value={data.age} />
                            <label className="label" htmlFor="email">Age</label>
                        </div>
                        <div className="form-field col-lg-6 mt-5 pt-5">
                            <input id="age" className="input-text js-input" type="text" value={data.gender} />
                            <label className="label" htmlFor="email">Gender</label>
                        </div>

                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="text" value={data.blood_group} />
                            <label className="label" htmlFor="blood group">Blood Group</label>
                        </div>

                        <div className="form-field col-lg-6 text-center">

                        </div>
                        <h3 className='pt-5 mt-5'><u>Address Details</u></h3>
                        <hr />
                        <div className="form-field col-lg-6 ">

                        </div>

                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="text" value={data.address} />
                            <label className="label" htmlFor="address">Present Address</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="text" value={data.ps} />
                            <label className="label" htmlFor="address">Police Station</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="age" className="input-text js-input" type="text" value={data.pincode} />
                            <label className="label" htmlFor="address">Pincode</label>
                        </div>


                        <div className={`form-field col-lg-6`}>

                        </div>
                        <h3 className='pt-5 mt-5'><u>Permanent Address</u></h3>
                        <hr />

                        <div className="form-field col-lg-6 ">

                        </div>

                        <div className={`form-field col-lg-6`}>
                            <input id="age" className="input-text js-input" type="text" value={data.permanent_address} />
                            <label className="label" htmlFor="address">Permanent Address</label>
                        </div>
                        <div className={`form-field col-lg-6`}>
                            <input id="age" className="input-text js-input" type="text" value={data.permanent_ps} />
                            <label className="label" htmlFor="address">Police Station</label>
                        </div>
                        <div className={`form-field col-lg-6 pt-5 mt-5`}>
                            <input id="age" className="input-text js-input" type="text" value={data.permanent_pincode} />
                            <label className="label" htmlFor="address">Pincode</label>
                        </div>


                        <div className={`form-field col-lg-6 pt-5 mt-5`}>

                        </div>
                        <h3 className='pt-5 mt-5'><u>Emergency Details</u></h3>
                        <hr />

                        <div className="form-field col-lg-6 pt-5 mt-5">

                        </div>



                        <div className="form-field col-lg-6" >
                            <input id="age" className="input-text js-input" type="text" value={data.contact_person} />
                            <label className="label" htmlFor="address">Emergency Contact Person</label>
                        </div>
                        <div className="form-field col-lg-6" >
                            <input id="age" className="input-text js-input" type="text" value={data.emergency_contact} />
                            <label className="label" htmlFor="address">Emergency Contact Number</label>
                        </div>
                        <div className="form-field col-lg-6" >
                            <input id="age" className="input-text js-input" type="text" value={data.relationship} />
                            <label className="label" htmlFor="address">Relation</label>
                        </div>

                        <div className="form-field col-lg-6 ">

                        </div>



                        <h3 className='pt-4 mt-5'><u>Insurance Details</u></h3>
                        <hr />

                        <div className="form-field col-lg-6 pt-4 mt-5">

                        </div>

                        {/* <div className="form-field col-lg-6 form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked2(!checked2)} />
                    <label className="form-check-label" for="flexCheckDefault">
                        Do you have Mediclaim?
                    </label>
                </div> */}

                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.name_of_insured} />
                            <label className="label" htmlFor="address">Name of Insured</label>
                        </div>
                        <div className={`form-field col-lg-6 `}>
                            <input id="age" className="input-text js-input" type="text" value={rel} />
                            <label className="label" htmlFor="email">Relationship with Member</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.social_security_number} />
                            <label className="label" htmlFor="address">Insured Social Security Number</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="date" value={data.insurance_date} />
                            <label className="label" htmlFor="address">Insurance Date</label>
                        </div>
                        <div className={`form-field col-lg-6 pt-5 mt-5`} >
                            <input id="age" className="input-text js-input" type="text" value={data.insurance_company} />
                            <label className="label" htmlFor="address">Insurance Company</label>
                        </div>
                        <div className={`form-field col-lg-6 pt-5 mt-5`} >
                            <input id="age" className="input-text js-input" type="text" value={data.tpa_name} />
                            <label className="label" htmlFor="address">TPA Name</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.policy_group_id} />
                            <label className="label" htmlFor="address">Policy/Group/ID</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.tpa_phone_number} />
                            <label className="label" htmlFor="address">TPA Phone Number</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.insurance_company_phone} />
                            <label className="label" htmlFor="address">Insurance Company Phone Number</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.agent_name} />
                            <label className="label" htmlFor="address">Agent Name</label>
                        </div>
                        <div className={`form-field col-lg-6 `} >
                            <input id="age" className="input-text js-input" type="text" value={data.agent_number} />
                            <label className="label" htmlFor="address">Agent Phone Number</label>
                        </div>


                        <div className="form-field col-lg-6" >
                            <input id="age" className="input-text js-input" type="text" value={data.company_name} />
                            <label className="label" htmlFor="address">Company Name (In case member is Corporate)</label>
                        </div>
                        {/* <button className={`btn btn-primary btn-block btn-lg login-btn ${display}`} type="submit" onClick={handleClick}>Print Form</button> */}

                    </form>
                    <div className="form-field col-lg-9" >
                        <input type="checkbox" className='input-text js-input' />
                        <label class="px-2">I Confirm that all the information mentioned above are correct</label>
                    </div>
                    <div className="form-field col-lg-6" >
                        <input type="checkbox" className='input-text js-input' />
                        <label class="px-2">I Accept the Terms and Conditions</label>
                    </div>
                    <div className='row'>
                        <div className="form-field col-lg-4" >
                            <input type="text" className='input-text js-input' />
                            <label class="px-2">Signature of Member</label>
                        </div>
                        <div className="form-field col-lg-4" >
                            <input type="text" className='input-text js-input' />
                            <label class="px-2">Signature of Consultant</label>
                        </div>
                        <div className="form-field col-lg-4" >
                            <input type="text" className='input-text js-input' />
                            <label class="px-2">Signature of Verifier</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center my-5">
            <button class="btn btn-primary font-weight-bold" onClick={generatePDF}>Print</button>
            </div>
        </>
    )
}

export default PrintForm