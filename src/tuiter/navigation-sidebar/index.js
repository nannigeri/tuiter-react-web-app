import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div>
            <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action border-0 ">
                    <i className="bi bi-twitter wd-tuit-blue wd-tuit-icon-size"></i><br/></a>
                <Link to="/tuiter/home"
                   className={`list-group-item list-group-item-action border-0 ${active == 'home' ? 'active override-color-active' : ''}`}>
                    <div className="row ${screen == 'HomeScreen' ? 'fw-bold' : ''}">
                        <div className="col-2">
                            <i className="bi bi-house"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            Home
                        </div>
                    </div>
                </Link>
                <Link to="/tuiter/explore"
                   className={`list-group-item list-group-item-action wd-no-border-nav border-0 ${active == 'explore' || active == undefined ? 'active override-color-active' : ''}`}>
                    <div className="row ${screen == 'Explore' ? 'fw-bold' : ''} ">
                        <div className="col-2">
                            <i className="bi bi-hash"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block">
                            Explore
                        </div>
                    </div>
                </Link>
                <a href="#" className="list-group-item list-group-item-action border-0 wd-no-border-nav">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-bell"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 wd-no-border-nav">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="../bookmarks/index.html" className="list-group-item list-group-item-action border-0 wd-no-border-nav">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-bookmark"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 wd-no-border-nav">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-fire"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            Top Articles
                        </div>
                    </div>
                </a>
                <a href="/tuiter/profile/" className={`list-group-item list-group-item-action border-0 ${active == 'profile' || active == 'edit-profile' ? 'active override-color-active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-person"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 wd-no-border-nav" tabIndex="-1">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block fw-light">
                            More
                        </div>
                    </div>

                </a>
            </div>
            <div className="p-2">
                <button className="btn btn-primary rounded-pill w-100 wd-tweet-button wd-tuit-blue">
                    Tuit
                </button>
            </div>
        </div>
    );
};
export default NavigationSidebar;