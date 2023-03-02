import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


const quoted = (
    {tweets}
) => {
    return(
        <div className="mt-2 wd-quoted-tweet">
            <img className="rounded-circle d-inline wd-quotes-pic" src={tweets.propic_q}/>
            <div className="d-inline ps-1">
                <span className="fw-bold pe-1">{tweets.name_q} <i className="bi bi-patch-check-fill wd-tuit-blue"></i></span>
                <span className="ps-1 text-muted">@{tweets.handle_q} • {tweets.time_q}</span>
                <div>{tweets.tweet_q}</div>
            </div>
        </div>
    )
}

const HomeTuitItem = (
    {
        tweets = {"name": "Aubrey Plaza",
    "handle": "aubrey_plaza",
    "date": "7 hr",
    "post": "I am acting in season 2 of White Lotus. It is currently streaming on HBO!",
    "avatar": "https://i.pinimg.com/564x/04/21/a0/0421a014816a1130cec0d884b3fd55bf.jpg",
    "imagepost": "https://assets-prd.ignimgs.com/2022/10/31/the-white-lotus-blogroll-1667236730365.jpg",
    "linktitle": "Watch the Emmy nominated show White Lotus Below!",
   " linkcaption": "White Lotus Season 2. Now Streaming on HBOMax.",
    "link": "hbomax.com",
    "comments": "5k",
    "retweets": "9k",
    "likes": "6k"}
    }
) => {
    return (
        <li class = "list-group-item">
   <div class = "float-end wd-dots-colors">
     •••
   </div>
            {tweets.retweet ? <div className= "ps-5 text-secondary fw-bold">
            <i className= "bi bi-repeat"></i>
            <span className= "ps-2 wd-smaller-font"> {tweets.retweetedby} Retweeted </span> </div> : ''}
    <div class = "d-flex justify-content-start">
      <div>
        <img class = "rounded-circle wd-avatar" src = {tweets.avatar} />
      </div>
      <div class = "ps-2">
        <span class = "fw-bold pe-2">
            <span className="pe-1 ">{tweets.name}</span>
          <i class="bi bi-patch-check-fill wd-tuit-blue"></i>
        </span>
        <span class = "text-secondary">
          @{tweets.handle} • {tweets.date}
        </span> <br></br>

        <span>
          {tweets.post}
        </span>

          {tweets.quote ? quoted({tweets}) :

          <div class="mt-2 card override-card">
           <img src= {tweets.imagepost}
              class="card-img-top override-border" alt="..."/>
            <div class="card-body override-border-top override-bg-body">
            <div >{tweets.linktitle}</div>
       <div class="text-secondary">
           {tweets.linkcaption}</div>
       <div class="text-secondary"><i className="bi bi-link-45deg"></i> {tweets.link} </div>

   </div>


</div> }

        <div class = "row mt-2 w-100">
          <div class = "col-3 text-secondary wd-bottom-font-size">
              <i className="bi bi-chat pe-1"></i>
            {tweets.comments}
          </div>

          <div class = "col-3 text-secondary wd-bottom-font-size">
              <i className="bi bi-repeat pe-1"></i>
            {tweets.retweets}
          </div>

          <div class = "col-3 text-secondary wd-bottom-font-size">
              <i className="bi bi-heart pe-1"></i>
            {tweets.likes}
          </div>

          <div class = "col-3 text-secondary wd-bottom-font-size">
              <i className="bi bi-upload"></i>
          </div>
<div className="wd-tuit-blue pt-3">Show this thread</div>

        </div>

      </div>
    </div>

  </li>)

}

export default HomeTuitItem;