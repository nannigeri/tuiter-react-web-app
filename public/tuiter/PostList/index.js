import PostListItem from "./PostListItem.js";
import tweets from "./tweets.js";

const PostList = () => {
    return(`
    <ul class="list-group">
    ${tweets.map(t => {return(PostListItem(t));}).join('')}
    </ul>
    `);
}
export default PostList;