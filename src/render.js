import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { addNewPost } from "./redux/state.js";


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App messages={state.messagesPage} posts={state.homePage} addNewPost={addNewPost} />
    </React.StrictMode>, document.getElementById('root'));
}
