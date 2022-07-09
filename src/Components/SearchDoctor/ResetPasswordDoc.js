import React, {useState} from 'react'
import axios from 'axios';
function ResetPasswordDoc() {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    const [current_password, setCurrent] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConf] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(`https://admin.susasthya.com/api/doctor/reset-password/${info.user.id}`,
                {
                    current_password,
                    password,
                    password_confirmation
                },
                config
            );
            window.location.assign('/patient/profile-settings')
        }catch (error) {
            console.log(error)
        }
    }
    return (
            <div class="content container my-4">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label>Old Password</label>
                        <input type="password" class="form-control" onChange={(e)=>setCurrent(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label>New Password</label>
                        <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" onChange={(e)=>setConf(e.target.value)}/>
                    </div>
                    <div class="submit-section">
                        <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }

    export default ResetPasswordDoc