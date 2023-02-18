import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <li class="list-group-item fw-bold wd-no-border">Who to follow</li>
           ${who.map(w => {return(WhoToFollowListItem(w));}).join('')}
           </ul>
             
             
             <div class="pt-2 ms-3 wd-font-size-desc">
            <span class="text-secondary"> Terms of Service
                    Privacy Policy
                    Cookie Policy  <br>
                     Accessibility
                    Ads info
                        More ...  <br>
                    © 2023 Twitter, Inc. </span>
            </div>
           
`); }

export default WhoToFollowList;

