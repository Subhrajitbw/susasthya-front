import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import KYD from './Components/KYD/KYD';
import Blogs from './Components/Blogs/Blogs';
import Blog from './Components/Blogs/Blog';
import ProfileSettings from './Components/Patient/ProfileSettings';
import ResetPassword from './Components/Patient/ResetPassword';
import Logout from './Components/Logout/Logout';
import SearchDoctor from './Components/SearchDoctor/SearchDoctor';
import DoctorProfile from './Components/SearchDoctor/DoctorProfile';
import Booking from './Components/Booking/Booking'
import SearchDoc from './Components/SearchDoctor/searchDoc';
import DoctorRegister from './Components/Register/DoctorRegister';
import DoctorLogin from './Components/Login/DoctorLogin';
import DoctorDashboard from './Components/SearchDoctor/DoctorDashboard';
import ResetPasswordDoc from './Components/SearchDoctor/ResetPasswordDoc';
import PatientBoarding from './Components/Patient/PatientBoarding';
import PrintForm from './Components/Patient/PrintForm';
import List from './Components/Patient/List';


function App() {
  
  return (
    <div class="main-wrapper App">
     
      <Router>
        
      {!window.location.pathname.includes('/printform/slug=') &&
          <Header />
        } 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/doctor/login" element={<DoctorLogin />} /> */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/know-your-disease" element={<KYD />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blogs/slug=:slug" element={<Blog />} />
          {/* <Route exact path="/patient/profile-settings" element={<ProfileSettings/>} />
          <Route exact path="/doctor/profile-settings" element={<DoctorDashboard/>} />
          <Route exact path="/reset-password" element={<ResetPassword/>} />
          <Route exact path="/doctor/reset-password" element={<ResetPasswordDoc/>} /> */}
          <Route exact path="/logout" element={<Logout />} />
          {/* <Route exact path="/doctor/search" element={<SearchDoctor/>} /> 
          <Route exact path="/profile/slug=:slug" element={<DoctorProfile/>} />
          <Route exact path="/appointment/create/created_by_user_id=:created_by_user_id/doctor_id=:doctor_id" element={<Booking/>} />
          <Route exact path="/doctor/search/slug=:slug" element={<SearchDoc/>} />
          <Route exact path="/register/doctor" element={<DoctorRegister/>} /> */}
          <Route exact path="/onboarding" element={<PatientBoarding/>}/>
          {}
          <Route exact path="/printform/slug=:slug" element={<PrintForm/>} />
          <Route exact path="/list/patients" element={<List/>} />
        </Routes>
        {!window.location.pathname.includes('/printform/slug=') &&
          <Footer />
        } 
      </Router>

    </div>
  );
}

export default App;
