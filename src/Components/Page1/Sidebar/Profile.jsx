import "./Profile.css"
import userLogo from './images/blank-profile-circle.png'

const Profile = () => {
    return (
        <div className="profile">
            <img src={userLogo}></img>
            <h1>User01</h1>
        </div>
    )
}

export default Profile;