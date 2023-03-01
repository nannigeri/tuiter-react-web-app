import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <input className="form-control rounded-pill ps-5 wd-search-gray" placeholder="Search Tuiter"/>
                        <span className="wd-search wd-search-icon-color"> <i className="bi bi-search"></i> </span>
                    </div>
                </div>

                <div className="col-1">
                    <i className="bi bi-gear-fill wd-gear-size" ></i>
                </div>
            </div>
            <div className="pb-2">

            </div>

    <ul class="nav nav-tabs mb-1 override-content override-no-border">
        <li class="nav-item">
            <a class="nav-link wd-nav-font-for-you" href="for-you.html">For you</a>
            <div class="wd-padding-foryou">
                <div class="wd-underline">
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-nav-font" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-nav-font" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-nav-font" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-none d-md-block wd-nav-font" href="entertainment.html" >Entertainment</a>
        </li>
    </ul>

            <div className="position-relative">
                <img className="img-fluid" alt="Responsive image"
                     src="https://www.3aw.com.au/wp-content/uploads/sites/12/2022/01/australian-open-crowd-1200x800.jpg"/>
                    <div className="wd-picture-font fw-bold h2"><span className="fw-light wd-main-explore-img-font">Tennis Tournament • Live<br></br> </span> Australian
                        Open 2023
                    </div>
            </div>

        <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;