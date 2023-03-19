import React, {useState} from "react";

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "../profile/index.css"
import {updateProfile} from "../profile/profile-reducer";


const EditProfile = (

) => {
    const dispatch = useDispatch();
    const profileArray = useSelector((state) => state.profile);
    const [account, setAccount] = useState(profileArray[0])

    const saveChangesHandler = () => {
        dispatch(updateProfile(account))
    }
    const updateNameHandler = (target) => {
        setAccount({...account, name: target})
    }

    const UpdateBioHandler = (target) => {
        setAccount({...account, bio: target})
    }

    const UpdateLocationHandler = (target) => {
        setAccount({...account, location: target})
    }

    const UpdateWebsiteHandler = (target) => {
        setAccount({...account, website: target})
    }

    const UpdateDOBHandler = (target) => {
        setAccount({...account, dateOfBirth: target})
    }
    return(
        <div>

            <div className="row">
                <div className = "col-1">
                    <Link to="../profile">
                        <div className= "pt-3">
                            <i className="bi bi-x-lg text-black fs-5"></i>
                        </div>
                    </Link>
                </div>
                <div className = "col-8">
                    <div className="fw-bold wd-profile-font mt-3">
                        Edit Profile
                    </div>
                </div>

                <div className="col-3">
                    <Link to="../profile">
                        <button className="btn btn-dark rounded-pill w-85 float-end mt-1 me-2 mb-2"
                        onClick={() => saveChangesHandler()}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <img className="" src={account.bannerPicture}/>
                <div className="position-relative ">
                    <img className="wd-profile-pg-pic wd-nudge-edit mb-2" src={account.profilePicture}/>
                    <a href="#" className="position-absolute text-black text-decoration-none wd-moving-camera-button">
                        <div className="position-relative">
                            <i className= "bi bi-circle-fill wd-moving-circle">
                            </i>
                            <i className="bi bi-camera wd-moving-camera">

                            </i>
                        </div>


                    </a>

                    <a href = '#' className="position-absolute text-black text-decoration-none wd-moving-x-button">
                        <div className="position-relative">
                            <i className= "bi bi-circle-fill wd-moving-circle">
                            </i>
                            <i className="bi bi-x wd-moving-camera">

                            </i>
                        </div>
                    </a>

                </div>
            </div>

            <div className="position-relative mt-5">
                <div className=" wd-tuit-grey wd-label-nudge">
                    Name
                </div>
                <input className="form-control pt-4" value={account.name}
                       onChange = {(event) => updateNameHandler(event.target.value)}></input>

            </div>

            <div className="position-relative mt-3">
                <div className="wd-tuit-grey wd-label-nudge">
                    Bio
                </div>
                <textarea className="form-control pt-4" value={account.bio}
                          onChange = {(event) => UpdateBioHandler(event.target.value)}></textarea>

            </div>


            <div className="position-relative mt-3">
                <div className=" wd-tuit-grey wd-label-nudge">
                    Location
                </div>
                <input className="form-control pt-4" value={account.location}
                       onChange = {(event) => UpdateLocationHandler(event.target.value)}></input>

            </div>


            <div className="position-relative mt-3">
                <div className="wd-tuit-grey wd-label-nudge">
                    Website
                </div>
                <input className="form-control pt-4" value={account.website}
                       onChange = {(event) => UpdateWebsiteHandler(event.target.value)}></input>

            </div>

            <div className="position-relative mt-3">

                <div className=" wd-tuit-grey wd-label-nudge">
                    Birthday
                </div>
                <input type ="date" className="form-control pt-4" value={account.dateOfBirth}
                       onChange = {(event) => UpdateDOBHandler(event.target.value)}></input>

            </div>




        </div>

    );
};
export default EditProfile;
