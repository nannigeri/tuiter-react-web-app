const PostListItem = (tweets) => {
    return (`<li class = "list-group-item override-bg">
   <div class = "float-end" style = "color: dimgrey;">
     •••
   </div>
    <div class = "d-flex justify-content-start">
      <div>
        <img class = "rounded-circle wd-avatar" src = ${tweets.avatar} >
      </div>
      <div class = "ps-2">
        <span class = "fw-bold">
          ${tweets.name}
          <i class="fas fa-check-circle"></i>
        </span>
        <span class = "text-secondary">
          @${tweets.handle} • ${tweets.date}
        </span> <br>

        <span>
          ${tweets.post}
        </span>


          <div class="mt-2 card override-card">
           <img src= ${tweets.imagepost}
              class="card-img-top override-border" alt="...">
            <div class="card-body override-border-top override-bg-body">
            <div >${tweets.linktitle}</div>
       <div class="text-secondary">
           ${tweets.linkcaption}</div>
       <div class="text-secondary"> &#128279 ${tweets.link} </div>

   </div>


</div>

        <div class = "row mt-2 w-75" style = "font-size: 13px;">
          <div class = "col-3 text-secondary">
            <i class = "far fa-comment"></i>
            ${tweets.comments}
          </div>

          <div class = "col-3 text-secondary">
            <i class = "fas fa-retweet"></i>
            ${tweets.retweets}
          </div>

          <div class = "col-3 text-secondary">
            <i class = "fas fa-heart"></i>
            ${tweets.likes}
          </div>

          <div class = "col-3 text-secondary">
            <i class = "fas fa-upload"></i>
          </div>


        </div>

      </div>
    </div>

  </li>`);
}

export default PostListItem;