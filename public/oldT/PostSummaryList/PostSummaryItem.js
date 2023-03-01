const PostSummaryItem = (post) => {

    return (` <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div class="wd-right-padding">
                            <div class="text-secondary">${post.topic} </div>
                            <div class="fw-bold"> ${post.userName} <i class="fas fa-check-circle"></i>
                        <span class="text-secondary fw-lighter"> - ${post.time} </span> </div>
                    <div class="fw-bold">${post.title}</div>
                    <span class="text-secondary">${post.tweets} ${post.tweets.length > 0 ? 'Tuits' : ''} </span><br>
                        </div>
                     <img class ="wd-tweet-picture" src = ${post.image} >
                    </div>
                </li>`);
}

export default PostSummaryItem;