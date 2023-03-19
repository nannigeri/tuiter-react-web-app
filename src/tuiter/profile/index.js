
import React from "react";
import {useSelector} from "react-redux";
import ProfilePg from "./profile-pg";


const ProfileComponent = () => {
    const profileArray = useSelector(state=>state.profile)
    return (
        <div>
            {profileArray.map(account => <ProfilePg key={account._id} account={account}/>)}
        </div>
    )

};

export default ProfileComponent;