import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "https://assets.materialup.com/uploads/922c35bd-940d-4f26-bbd5-ff8b7075f53b/preview.jpg"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <div className="wd-right-padding">
                    <div className="text-secondary">{post.topic} </div>
                    <div className="fw-bold"> {post.userName} <i className="bi bi-patch-check-fill wd-tuit-blue"></i>
                        <span className="text-secondary fw-lighter"> - {post.time} </span></div>
                    <div className="fw-bold">{post.title}</div>
                    <span className="text-secondary">{post.tweets} {post.tweets.length > 0 ? 'Tuits' : ''} </span><br></br>
                </div>
                <img className="wd-tweet-picture" src={`${post.image}`} />
            </div>
        </li>
    );
};
export default PostSummaryItem;