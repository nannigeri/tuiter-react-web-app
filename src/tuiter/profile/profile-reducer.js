import { createSlice } from "@reduxjs/toolkit";
import profileArray from './profile.json';

const acc = {
    "_id": 123,
    "firstName": "Neha",
    "lastName": "Annigeri",
    "handle": "@neha_a",
    "num_tuits": 570,
    "profilePicture": "https://i.pinimg.com/736x/4d/d4/ac/4dd4ac0cd3f2b6c0fa0f7ffadb597c7d.jpg",
    "bannerPicture": "https://pbs.twimg.com/media/CwlWcIBXAAUW6gm.jpg:large",
    "bio": "cats are extremely cool and i love them. northeastern cs grad student.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "1999-01-18",
    "dateJoined": "4/2009",
    "followingCount": 1,
    "followersCount": 20000
};



const profileSlice = createSlice({
    name: 'profile',
    initialState: profileArray,
    reducers: {
        updateProfile(state, action) {
            state[0] = action.payload
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;