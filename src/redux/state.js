import { rerenderEntireTree } from "../render.js";

const state = {
  homePage: {
    posts: [{
      id: 1,
      text: "Hello world",
      name: "Andrew"
    }]
  },

  messagesPage: {
    messagesUsersData: [{
        id: 1,
        name: "Andrew",
      },
      {
        id: 2,
        name: "Vika",
      },
      {
        id: 3,
        name: "Maria",
      }
    ],

    messagesUsersTexts: [{
      id: 1,
      text: "Hello Andrew"
    }]
  }
}



export let addNewPost = (postText) => {
  let newPost = {
    id: 2,
    text: postText,
    name: "Andrew"
  }

  state.homePage.posts.unshift(newPost);

  rerenderEntireTree(state);

}

export default state;