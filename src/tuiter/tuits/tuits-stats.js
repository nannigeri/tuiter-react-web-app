import React from "react";
import {useDispatch} from "react-redux";
import {tuitLiked, tuitUnliked} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

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
        <div className="d-flex justify-content-between mt-2 w-75">
            <div className="text-secondary wd-bottom-font-size">
                <i className="bi bi-chat pe-1"></i>
                {post.replies}
            </div>

            <div className="text-secondary wd-bottom-font-size">
                <i className="bi bi-repeat pe-1"></i>
                {post.retuits}
            </div>

            {post.liked ?
                <div className="text-secondary wd-bottom-font-size">
                    <i onClick={()=> dispatch(updateTuitThunk({...post, likes: post.likes -1, liked: false}))} className="bi bi-heart-fill pe-1 wd-red"></i>
                    {post.likes}
                </div> :
                <div className="text-secondary wd-bottom-font-size">
                    <i onClick={()=> dispatch(updateTuitThunk({...post, likes: post.likes +1, liked: true}))} className="bi bi-heart pe-1"></i>
                    {post.likes}
                </div>

            }

                {post.disliked ?
                        <div className="text-secondary wd-bottom-font-size">
                            <i onClick={()=> dispatch(updateTuitThunk({...post, dislikes: post.dislikes -1, disliked: false}))} className="bi bi-hand-thumbs-down-fill pe-1"></i>
                            {post.dislikes}
                        </div> :
                        <div className="text-secondary wd-bottom-font-size">
                            <i onClick={()=> dispatch(updateTuitThunk({...post, dislikes: post.dislikes +1, disliked: true}))} className="bi bi-hand-thumbs-down pe-1"></i>
                            {post.dislikes}
                        </div>
                }


            <div className=" text-secondary wd-bottom-font-size">
                <i className="bi bi-upload"></i>
            </div>

        </div>

    );

}

export default TuitsStats;