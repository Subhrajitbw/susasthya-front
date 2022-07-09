import axios from 'axios';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import React, { useState } from 'react'
function PatientBoarding() {
    let info = "", created_by_user_id = "";
    if (localStorage.getItem('userInfo')) {
        info = JSON.parse(localStorage.getItem('userInfo'));
        created_by_user_id = info.user.id;
    }


    let [first_name, setFname] = useState("");
    let [last_name, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [middle_name, setMname] = useState("");
    let [phone, setPhone] = useState("");
    let [ps, setPs] = useState("");
    let [pincode, setPin] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [address, setAddress] = useState("");
    let [permanent_address, setAddress2] = useState("");
    let [permanent_ps, setPs2] = useState("");
    let [permanent_pincode, setPin2] = useState("");
    let [blood_group, setBlood] = useState("");
    let [checked, setChecked] = useState(false);
    let [checked2, setChecked2] = useState(false);
    let [name_of_insured, setIname] = useState("");
    let [relationship_with_member, setRelation] = useState("");
    let [social_security_number, setInumber] = useState("");
    let [insurance_date, setIdate] = useState("");
    let [insurance_company, setIcompany] = useState("");
    let [tpa_name, setItname] = useState("");
    let [policy_group_id, setIpolicy] = useState("");
    let [tpa_phone_number, setItpnumber] = useState("");
    let [agent_name, setIaname] = useState("");
    let [agent_number, setIaphone] = useState("");
    let [company_name, setCompany] = useState("");
    let [emergency_contact, setEnumber] = useState("");
    let [contact_person, setPerson] = useState("");
    let [insurance_company_phone, setIpnumber] = useState("");
    let [relationship, setRel] = useState("");
    let [dob, setDob] = useState("");
    let display = "d-block";
    let display2 = "invisible";
    let display3 = "visible";
    let display4 = "d-none"

    if (checked === true) {
        display = "d-none";
        display2 = "visible"
        display3 = "invisible"
        permanent_address = address;
        permanent_pincode = pincode;
        permanent_ps = ps;
    }

    if (checked2 === true) {
        display4 = "d-block";
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`https://admin.susasthya.com/api/onboarding`,
                {
                    first_name,
                    middle_name,
                    last_name,
                    dob,
                    age,
                    email,
                    phone,
                    address,
                    ps,
                    pincode,
                    permanent_address,
                    permanent_pincode,
                    permanent_ps,
                    gender,
                    blood_group,
                    emergency_contact,
                    contact_person,
                    name_of_insured,
                    insurance_company,
                    insurance_company_phone,
                    insurance_date,
                    relationship_with_member,
                    tpa_name,
                    tpa_phone_number,
                    agent_name,
                    agent_number,
                    social_security_number,
                    policy_group_id,
                    company_name,
                    relationship
                },
                config
            );
           
            localStorage.setItem("data", JSON.stringify(data))
            window.location.assign("/list/patient");
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div class="container my-4 py-5 big">
            <h3 className=''>Onboarding Form</h3>
            <form className="contact-form row" onSubmit={handleSubmit}>
                <div className="form-field col-lg-6">
                    <input id="name" className="input-text js-input" type="text" onChange={(e) => setFname(e.target.value)} />
                    <label className="label" htmlFor="name">First Name</label>
                </div>
                <div className="form-field col-lg-6">
                    <input id="name" className="input-text js-input" type="text" onChange={(e) => setMname(e.target.value)} />
                    <label className="label" htmlFor="name">Middle Name</label>
                </div>
                <div className="form-field col-lg-6">
                    <input id="name" className="input-text js-input" type="text" onChange={(e) => setLname(e.target.value)} />
                    <label className="label" htmlFor="name">Last Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <label className="label" htmlFor="email">Email</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setPhone(e.target.value)} />
                    <label className="label" htmlFor="phone number">Phone Number</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="date" onChange={(e) => setDob(e.target.value)} />
                    <label className="label" htmlFor="phone number">Date of Birth</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setAge(e.target.value)} />
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
                    <select class="custom-select" id="gender2" onChange={(e) => setBlood(e.target.value)}>
                        <option selected>Blood Group</option>
                        <option value="A+" >A+</option>
                        <option value="B+" >B+</option>
                        <option value="AB+" >AB+</option>
                        <option value="O+" >O+</option>
                        <option value="A-" >A-</option>
                        <option value="B-" >B-</option>
                        <option value="AB-" >AB-</option>
                        <option value="O-" >O-</option>
                       
                    </select>
                </div>
                <div className="form-field col-lg-6">

                </div>
                <div className="form-field col-lg-6 ">
                    <h3 className=''>Address Details</h3>
                </div>


                <div className="form-field col-lg-6 ">

                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setAddress(e.target.value)} />
                    <label className="label" htmlFor="address">Present Address</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setPs(e.target.value)} />
                    <label className="label" htmlFor="address">Police Station</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setPin(e.target.value)} />
                    <label className="label" htmlFor="address">Pincode</label>
                </div>

                <div className="form-field col-lg-6 form-check">

                </div>

                <div className="form-field col-lg-6 form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked(!checked)} />
                    <label className="form-check-label" for="flexCheckDefault">
                        Is Permanent Address Same as Present Address?
                    </label>
                </div>
                <div className="form-field col-lg-6 form-check">

                </div>

                <div className={`form-field col-lg-6 ${display}`}>
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setAddress2(e.target.value)} />
                    <label className="label" htmlFor="address">Permanent Address</label>
                </div>
                <div className={`form-field col-lg-6 ${display}`}>
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setPs2(e.target.value)} />
                    <label className="label" htmlFor="address">Police Station</label>
                </div>
                <div className={`form-field col-lg-6 ${display}`}>
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setPin2(e.target.value)} />
                    <label className="label" htmlFor="address">Pincode</label>
                </div>


                <div className={`form-field col-lg-6 ${display2}`}>
                    <h3 className=''>Emergency Contact Details</h3>
                </div>
                <div className={`form-field col-lg-6 ${display3}`}>
                    <h3 className=''>Emergency Contact Details</h3>
                </div>
                <div className={`form-field col-lg-6 ${display}`}>

                </div>



                <div className="form-field col-lg-6" >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setPerson(e.target.value)} />
                    <label className="label" htmlFor="address">Emergency Contact Person</label>
                </div>
                <div className="form-field col-lg-6" >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setEnumber(e.target.value)} />
                    <label className="label" htmlFor="address">Emergency Contact Number</label>
                </div>
                <div className="form-field col-lg-6" >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setRel(e.target.value)} />
                    <label className="label" htmlFor="address">Relation</label>
                </div>



                <div className="form-field col-lg-6">
                    <h3 className=''>Mediclaim Details</h3>
                </div>
                <div className="form-field col-lg-6 ">

                </div>
                <div className="form-field col-lg-6 form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked2(!checked2)} />
                    <label className="form-check-label" for="flexCheckDefault">
                        Do you have Mediclaim?
                    </label>
                </div>
                <div className="form-field col-lg-6 ">

                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setIname(e.target.value)} />
                    <label className="label" htmlFor="address">Name of Insured</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`}>
                    <select class="custom-select" id="gender2" onChange={(e) => setRelation(e.target.value)}>
                        <option selected>Relationship</option>
                        <option value="Self" >Self</option>
                        <option value="Spouse" >Spouse</option>
                        <option value="Child" >Child</option>
                        <option value="Other" >Other</option>
                    </select>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setInumber(e.target.value)} />
                    <label className="label" htmlFor="address">Insured Social Security Number</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="date" onChange={(e) => setIdate(e.target.value)} />
                    <label className="label" htmlFor="address">Insurance Date</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setIcompany(e.target.value)} />
                    <label className="label" htmlFor="address">Insurance Company</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setItname(e.target.value)} />
                    <label className="label" htmlFor="address">TPA Name</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setIpolicy(e.target.value)} />
                    <label className="label" htmlFor="address">Policy/Group/ID</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setItpnumber(e.target.value)} />
                    <label className="label" htmlFor="address">TPA Phone Number</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setIpnumber(e.target.value)} />
                    <label className="label" htmlFor="address">Insurance Company Phone Number</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setIaname(e.target.value)} />
                    <label className="label" htmlFor="address">Agent Name</label>
                </div>
                <div className={`form-field col-lg-6 ${display4}`} >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setIaphone(e.target.value)} />
                    <label className="label" htmlFor="address">Agent Phone Number</label>
                </div>


                <div className="form-field col-lg-6" >
                    <input id="age" className="input-text js-input" type="text" onChange={(e) => setCompany(e.target.value)} />
                    <label className="label" htmlFor="address">Company Name (In case member is Corporate)</label>
                </div>
                <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Review & Submit</button>

            </form>
        </div>
    )
}

export default PatientBoarding