import React , {useEffect} from "react";
import TuitsItem from "./tuits-item";
import {useDispatch,useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks.js";



const TuitsList = () =>
{
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(

        <ul className= "list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tweets =>
                    <TuitsItem
                        key = {tweets.id}
                        tweets={tweets}/>)
            }

        </ul>
    );

};
export default TuitsList;