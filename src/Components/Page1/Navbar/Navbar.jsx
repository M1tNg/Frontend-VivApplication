import "./Navbar.css";

import vivLogo from  '../Navbar/image/logoIcon.svg';
import schedule from "../Navbar/image/scheduleIcon.svg";
import summary from '../Sidebar/images/summaryicon.png';
import tip from '../../../assets/tip-topic.png'
import { NavLink } from "react-router-dom";
import { getToken, logout } from '../../services/auth';
import { useNavigate} from 'react-router-dom'
import loginIcon from './image/loginIcon.png'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="Navbar-container">
            <NavLink to="/dashboard">
            <div className="logo">
                
                <img id="logoIcon" src={vivLogo} alt="logo icon" />
                {/* link Page1 */}
                    <h2 id="text-viv">Viv Application</h2>
                    
            </div>
            </NavLink>

            <NavLink to="/schedule">
            <div className="schedule"> 
        
                <img id="scheduleIcon" src={schedule} alt="schedule icon" />
                {/* link schedule page */}
                <h3 id="text-schedule">Schedule</h3>
                
            </div>
            </NavLink>
           
            {getToken() && (
                
                        <div className="logout">
                            
                            <button onClick={()=>logout(()=>navigate("/"))} style={{cursor: "pointer"}}>
                            
                            <img id="loginIcon" src={loginIcon} alt="logout icon" />
                                <p>Logout</p>
                                
                            </button>
                           
                        </div>
                        
                    )}
            {/* {!getToken() && (
                        <div>
                        
                            <button onClick={() => navigate("/login")} style={{cursor: "pointer"}}>
                            
                            <img id="loginIcon" src={loginIcon} alt="logout icon" />
                                <p>Login</p>
                                
                            </button>
                        
                        </div>
                    )} */}

        </div>
    );

}

export default Navbar;