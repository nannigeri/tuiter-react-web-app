const PostListItem = (tweets) => {
    return (`<div class="wd-main-border">
     <span class="wd-dots-w"> •••
            </span>
    <span class = "wd-format-icon-name">
    <img class ="wd-avatar" src= ${tweets.avatar}
         />
        <span class ="wd-name">
        ${tweets.name}
        <span class="wd-handle-font-2">
            ${tweets.handle} • ${tweets.date}
        </span>
        </br>
            <div class="wd-max-w">


            <span class="wd-post-font">
                ${tweets.post}
            </span>

                </div>


            <div class="wd-spacing"></div>

            <div class="wd-b-pic">
                <img class="wd-post-image" src= ${tweets.imagepost}
                />
            </div>
            <div class="wd-b-cap ">
                <span class ="wd-link-title"> ${tweets.linktitle} </span>
                </br>
                 <span class="wd-link-desc" > ${tweets.linkcaption}
                     </br>
                     &#128279 ${tweets.link}
                 </span>



            </div>

            <div class="wd-bottom-area-format">
                <span>
                <a href="#"><img class = "wd-bottom-icons" src="twitter_reply.png"/></a>
                    <span class="wd-bottom-area-font">
                    ${tweets.comments}
                        </span>
                    </span>
                <span>
                <a href="#"><img class = "wd-bottom-icons" src="retweet_icon.png"/></a>
                    <span class="wd-bottom-area-font">
                    ${tweets.retweets}
                        </span>
                    </span>
                <span>
                <a href="#"><img class = "wd-bottom-icons" src="twitter-heart.jpg"/></a>
                    <span class="wd-heart-font">
                    ${tweets.likes}
                        </span>
                    </span>
                <span>
                <a href="#"><img class = "wd-bottom-icons" src="twitter_share_link.jpg"/></a>
                    </span>
            </div>
            </span>
    </span>



</div>`);
}

export default PostListItem;