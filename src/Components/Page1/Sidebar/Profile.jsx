import "./Profile.css"
import userLogo from './images/blank-profile-circle.png'

const Profile = () => {
    return (
        <div>
        <div className="profile">
            <img src={userLogo}></img>
            <h1>User01</h1>
        </div>
    </div>
    )
}

export default Profile;