import PostSummary from "../PostSummaryList";
const ExploreComponent = () => {
    return(`
            <div class="row">
                      <div class = "row">
                <div class = "col-11">
                    <div class="position-relative">
                       <input class ="form-control rounded-pill ps-5 wd-search-gray" placeholder="Search Tuiter">
                        <span class = "wd-search wd-search-icon-color"> <i class = "fas fa-search"></i> </span>

                    </div>
                </div>

                <div class="col-1">
                    <i class = "fas fa-cog fa-2x wd-tuit-blue"></i>
                </div>
            </div>
            <div class = "pb-2">
            </div>
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
          <div class ="position-relative">
                <img class="img-fluid" alt="Responsive image" src ="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
                <div class="wd-picture-font fw-bold h2"> SpaceX's Starship </div>
            </div>
           ${PostSummary()}
    `);
}
export default ExploreComponent;
