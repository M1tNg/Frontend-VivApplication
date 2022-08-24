import "./Profile.css"
import userLogo from './images/blank-profile-circle.png'
import { useState, useEffect } from "react";
import axios from 'axios';
import { getToken } from "../../services/auth";

const Profile = () => {

    const [profile, setProfile] = useState({
        name:"",
        lastname:""
    })
    const fetchData = () => {
        axios.get(`https://back-end-viv-application.vercel.app/users/login`, {headers: {authorization: `Bearer ${getToken()}`}})
        .then ((res) => {
            setProfile(res.data)
        }).catch((err) => {
            alert(err)
        })
      }
      useEffect(() => {
        fetchData()
      }, [])
    return (
        <div>
        <div className="profile">
            <img src={userLogo}></img>
            <h1>{`${profile.name} ${profile.lastname}`}</h1>
        </div>
    </div>
    )
}

export default Profile;