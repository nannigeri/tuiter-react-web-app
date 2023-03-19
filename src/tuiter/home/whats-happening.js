import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";
import "../who-to-follow-list/index.css"



const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://i.pinimg.com/736x/4d/d4/ac/4dd4ac0cd3f2b6c0fa0f7ffadb597c7d.jpg" className="rounded-circle " width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold override-color-tweet-b"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3 wd-tuit-blue wd-whats-hap-button-size"></i>
                        <i className="bi bi-filetype-gif me-3 wd-tuit-blue wd-whats-hap-button-size"></i>
                        <i className="bi bi-bar-chart me-3 wd-tuit-blue wd-whats-hap-button-size"></i>
                        <i className="bi bi-emoji-smile me-3 wd-tuit-blue wd-whats-hap-button-size"></i>
                        <i className="bi bi-geo-alt wd-tuit-blue wd-whats-hap-button-size"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;