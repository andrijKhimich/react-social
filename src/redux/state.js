const state = {
  homePage: {
    postText: [{
      // id: 1,
      text: "Hello world"
    }],
    postAuthor: [{
      id: 1,
      name: "Andrew",
      imgSrc: "../../public/images/user-photo.jpg "
    }
    ]
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
    },
    {
      id: 2,
      text: "Hello Vika"
    },
    {
      id: 3,
      text: "Hello Maria"
    }
    ]
  }
}

export default state;