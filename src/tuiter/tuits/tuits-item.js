import React from "react";
import "../home-tuits/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TuitsStats from "./tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";




const TuitsItem = (
    {
        tweets
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">

            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tweets._id)}></i>
            <div className="d-flex justify-content-start">
                <div>
                    <img className="rounded-circle wd-avatar" src={tweets.image}/>
                </div>
                <div className="ps-2">
        <span className="fw-bold pe-2">
            <span className="pe-1 ">{tweets.userName}</span>
          <i className="bi bi-patch-check-fill wd-tuit-blue"></i>
        </span>
                    <span className="text-secondary">
                        {tweets.handle} • {tweets.time}
        </span> <br></br>

                    <span>
          {tweets.tuit}
        </span>


                </div>
            </div>
            <div className="wd-nudge-right w-100">
                <TuitsStats post = {tweets}/>
            </div>


        </li>
        )

}

export default TuitsItem;