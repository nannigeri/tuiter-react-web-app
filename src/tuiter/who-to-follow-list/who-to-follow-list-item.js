import React from "react";
import "./index.css";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://3dprint.com/wp-content/uploads/2015/08/m3.jpg' }
    }
) => {
    return(
        <li className="list-group-item wd-no-border wd-grey">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex">
                        <img className="rounded-circle wd-profile-picture" src={`${who.avatarIcon}`}/>
                        <div className="ps-1">
                                <span className="fw-bold wd-name-font">{who.userName} <i
                                    className="bi bi-patch-check-fill wd-tuit-blue"></i></span><br></br>
                            <span className="wd-name-font text-secondary">@{who.handle}</span>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary override-color-tweet-b rounded-pill w-85 ">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;