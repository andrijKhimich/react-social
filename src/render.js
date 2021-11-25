import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { addNewPost, updateNewPost } from "./redux/state.js";


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App messages={state.messagesPage} posts={state.homePage} addNewPost={addNewPost} updateNewPost={updateNewPost}/>
    </React.StrictMode>, document.getElementById('root'));
}
