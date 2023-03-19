import React from "react";
import "../home-tuits/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";
import "./index.css"

const formatting_DOB = (date) => {
    const d = date.split("-");
    const m = d[1];
    const day = d[2]
    const y = d[0];
    const n_d = new Date();
    n_d.setMonth(m-1);
    let mon = n_d.toLocaleString('en-US', {month:'long'});
    return mon + " " + day + ", " + y
}
const formatting_date = (date) => {
    const d = date.split("/");
    const m = d[0];
    const y = d[1];
    const n_d = new Date();
    n_d.setMonth(m-1);
    let mon = n_d.toLocaleString('en-US', {month:'long'});
    return mon + " " + y
}
const ProfilePg = (
    {
        account
    }
) => {
    return(
        <div>
           <div className="row">
               <div className = "col-1">
                   <Link to="../home">
                       <div className= "pt-3">
                       <i className="bi bi-arrow-left text-black fs-5"></i>
                       </div>
                   </Link>
               </div>
               <div className = "col-11">
                   <div className="fw-bold wd-profile-font">
                   {account.name}
                   </div>
                   <div className="text-muted fs-6">
                       {account.num_tuits} Tuits
                   </div>
               </div>
           </div>

            <div className="row">
                <img className="" src={account.bannerPicture}/>
                <div className="position-relative ">
                        <img className="wd-profile-pg-pic wd-icon-nudge" src={account.profilePicture}/>
                        <Link to="../edit-profile">
                            <button className="btn border-dark rounded-pill w-85 float-end mt-3 me-2 ">
                                Edit Profile
                            </button>
                        </Link>


                </div>

            </div>

            <div className="ps-4">
                <div className="wd-line-height">
                    <div className="mt-4 fw-bold wd-profile-font">
                        {account.name}
                    </div>
                    <div className="text-secondary">
                        {account.handle}
                    </div>
                </div>
                <div className= "row">
                    <div className="col-11">
                        <div className="mt-2">
                            {account.bio}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-none d-md-block">
                        <div className="mt-1 d-flex justify-content-start wd-tuit-grey">
                            <div className="me-3">
                                <i className="bi bi-geo-alt pe-2"></i> {account.location}
                            </div>

                            <div className="me-3">
                                <i className="bi bi-balloon pe-1"></i> Born {formatting_DOB(account.dateOfBirth)}
                            </div>

                            <div className="me-3">
                                <i className="bi bi-calendar3 pe-2"></i> Joined {formatting_date(account.dateJoined)}
                            </div>


                        </div>
                    </div>
                    <div className="col-12 d-md-none">
                        <div className="mt-1 wd-tuit-grey">
                            <div className="me-3">
                                <i className="bi bi-geo-alt pe-2"></i> {account.location}
                            </div>

                            <div className="me-3">
                                <i className="bi bi-balloon pe-1"></i> Born {formatting_DOB(account.dateOfBirth)}
                            </div>

                            <div className="me-3">
                                <i className="bi bi-calendar3 pe-2"></i> Joined {formatting_date(account.dateJoined)}
                            </div>


                        </div>

                    </div>

                </div>


                <div className="mt-1 d-flex justify-content-start">
                    <div className= "me-3">
                        <span className="fw-bold">{account.followingCount.toLocaleString()}</span>

                            <span className="wd-tuit-grey"> Following </span>


                    </div>

                    <div className= "me-3">
                        <span className="fw-bold"> {account.followersCount.toLocaleString()} </span>

                        <span className="wd-tuit-grey"> Followers </span>


                    </div>

                </div>

            </div>

        </div>
    );
};
export default ProfilePg;
