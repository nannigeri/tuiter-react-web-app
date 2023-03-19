import React from "react";
import {useDispatch} from "react-redux";
import {tuitLiked, tuitUnliked} from "./tuits-reducer";

const TuitsStats = (
    {
        post
    }
) =>
{

    const dispatch = useDispatch()

    const handleLike = (tuit) => {
        dispatch(tuitLiked(tuit))
    }
    const handleUnlike = (tuit) => {
        dispatch(tuitUnliked(tuit))
    }
    return (
        <div className="row mt-2 w-100">
            <div className="col-3 text-secondary wd-bottom-font-size">
                <i className="bi bi-chat pe-1"></i>
                {post.replies}
            </div>

            <div className="col-3 text-secondary wd-bottom-font-size">
                <i className="bi bi-repeat pe-1"></i>
                {post.retuits}
            </div>

            {post.liked ?
                <div className="col-3 text-secondary wd-bottom-font-size">
                    <i onClick={()=> handleUnlike(post)} className="bi bi-heart-fill pe-1 wd-red"></i>
                    {post.likes}
                </div> :
                <div className="col-3 text-secondary wd-bottom-font-size">
                    <i onClick={()=> handleLike(post)} className="bi bi-heart pe-1"></i>
                    {post.likes}
                </div>

            }

            <div className="col-3 text-secondary wd-bottom-font-size">
                <i className="bi bi-upload"></i>
            </div>

        </div>

    );

}

export default TuitsStats;