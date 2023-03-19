import React from "react";
import TuitsItem from "./tuits-item";
import {useSelector} from "react-redux";


const TuitsList = () =>
{
    const tweetsArray = useSelector(state => state.tuits)
    return(

        <ul className= "list-group">
            {
                tweetsArray.map(tweets =>
                    <TuitsItem
                        key = {tweets.id}
                        tweets={tweets}/>)
            }

        </ul>
    );

};
export default TuitsList;