import React from "react";
import HomeTuitItem from "./HomeTuitItem";
import tweetsArray from "./tweets.json"

const HomeComponent = () =>
{
    return(
        <ul className= "list-group">
            {
                tweetsArray.map(tweets =>
                    <HomeTuitItem
                        key = {tweets.id}
                        tweets={tweets}/>)
            }

        </ul>
    );

};
export default HomeComponent;