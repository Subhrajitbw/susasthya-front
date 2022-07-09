import {useNavigate} from 'react-router-dom'
function Logout() {
    //const history=useNavigate();
    localStorage.clear()
    window.location.assign("/")
}

export default Logout;
