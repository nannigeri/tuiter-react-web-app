import React from "react";
const PostSummaryItem = (
    {
        post
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
                    <span className="text-secondary">{post.replies} Tuits </span><br></br>
                </div>
                <img className="wd-tweet-picture" src={post.image} />
            </div>
        </li>
    );
};
export default PostSummaryItem;