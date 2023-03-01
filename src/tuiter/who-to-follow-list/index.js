import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import "./index.css";

const WhoToFollowList = () => {
    return(
        <div>
        <ul className="list-group">
            <li className="list-group-item fw-bold wd-no-border wd-grey">Who to follow</li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
            <li className="list-group-item wd-no-border wd-grey wd-tuit-blue">
                Show more

            </li>
        </ul>

    <div className="pt-2 ms-3 wd-font-size-desc">
            <span className="text-secondary"> Terms of Service
                    Privacy Policy
                    Cookie Policy  <br></br>
                     Accessibility
                    Ads info
                More ...  <br></br>
                    © 2023 Twitter, Inc. </span>
    </div>

        </div>
    );
};

export default WhoToFollowList;