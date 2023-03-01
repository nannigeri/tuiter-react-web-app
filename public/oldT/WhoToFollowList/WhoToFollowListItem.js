

const WhoToFollowListItem = (who) => {
    return(` <li class="list-group-item wd-no-border">
                    <div class="row">
                        <div class="col-8">
                            <div class="d-flex">
                                <img class="rounded-circle wd-profile-picture" src=${who.avatarIcon}>
                                <div class="ps-1">
                                    <span class="fw-bold wd-name-font" >${who.userName} <i class="fas fa-check-circle wd-tuit-blue"></i></span><br>
                                    <span class="wd-name-font text-secondary text-white">@${who.handle}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary override-color-tweet-b rounded-pill w-85 ">
                                Follow
                            </button>
                        </div>
                    </div>
                </li>`)
    }

export default WhoToFollowListItem;