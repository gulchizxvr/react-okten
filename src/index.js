import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import App from './App';


const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case "loadUsers" :
            return {...state, users: action.payload};
        default :
            return state;
    }}

    const commentsReducer = (state = {comments: []}, action) => {
        switch (action.type) {
            case "loadComments" :
                return {...state, comments: action.payload};
            default :
                return state;
        }
    }

    const postsReducer = (state = {posts: []}, action) => {
        switch (action.type) {
            case "loadPosts" :
                return {...state, posts: action.payload};
            default :
                return state;
        }
    }

    let reducer = combineReducers({
        postsReducer,
        usersReducer,
        commentsReducer
    })


    let store = createStore(reducer)

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

