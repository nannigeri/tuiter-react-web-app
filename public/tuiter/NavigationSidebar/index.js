const NavigationSidebar = (screen) => {
    return(`
    <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action wd-no-border ">
                    <i class="fab fa-tumblr fa-2x wd-tuit-blue"></i><br/></a>
                <a href="../explore/HomeScreen/index.html" class="list-group-item list-group-item-action wd-no-border ${screen == 'HomeScreen' ? 'active' : ''}">
                    <div class = "row ${screen == 'HomeScreen' ? 'fw-bold' : ''}">
                        <div class = "col-2">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            Home
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-no-border ${screen == 'Explore' ? 'active' : ''}">
                    <div class = "row ${screen == 'Explore' ? 'fw-bold' : ''} " >
                        <div class ="col-2">
                            <i class = "fas fa-hashtag"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-no-border">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-no-border">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action wd-no-border">
                    <div class = "row">
                        <div class = "col-2">
                            <i class = "fas fa-bookmark"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-no-border">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            Top Articles
                        </div>
                    </div>
                </a>
                <a href="../profile.html" class="list-group-item list-group-item-action wd-no-border">
                    <div class = "row">
                        <div class = "col-2">
                            <i class = "fas fa-user"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-no-border" tabindex="-1">
                    <div class = "row">
                        <div class = "col-2">
                            <span class="fa-stack wd-icon-font">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse" style = "color: black;"></i>
                        </span>
                        </div>
                        <div class = "col-10 d-none d-xl-block fw-light">
                            More
                        </div>
                    </div>

                </a>
            </div>
            <div class = "p-2">
                <button class="btn btn-primary rounded-pill w-100 wd-tweet-button">
                    Tuit
                </button>
            </div>
 `);
}
export default NavigationSidebar;