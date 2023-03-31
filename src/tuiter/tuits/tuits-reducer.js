import { createSlice } from "@reduxjs/toolkit";

import {deleteTuitThunk, createTuitThunk, findTuitsThunk, updateTuitThunk}
    from "../../services/tuits-thunks.js";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "neha annigeri",
    "handle": "@neha_a",
    "image": "https://i.pinimg.com/736x/4d/d4/ac/4dd4ac0cd3f2b6c0fa0f7ffadb597c7d.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "",
    "time": "2h",
    "liked": false,
    "replies": 32,
    "retuits": 300,
    "likes": 567,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },

        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },

        //[createTuitThunk.fulfilled]:
          //  (state, { payload }) => {
            //    state.loading = false
              //  state.tuits.push(payload)
           // },

        [createTuitThunk.fulfilled]:
        (state, { payload }) => {
         state.loading = false
        state.tuits.unshift({...payload, ...templateTuit,})
         },

        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    },
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },

        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        tuitLiked(state, action) {
            const likedID = state.findIndex((tuit) => tuit._id == action.payload._id)
            state[likedID].liked = true;
            state[likedID].likes += 1;
        },
        tuitUnliked(state, action) {
            const unlikedID = state.findIndex((tuit) => tuit._id == action.payload._id)
            state[unlikedID].liked = false;
            state[unlikedID].likes -= 1;
        }
    }

});
export const {tuitLiked, tuitUnliked, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;