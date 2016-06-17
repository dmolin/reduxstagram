//Mock the server side API

//server-side 'image' of the data
//this is mutable data.
let comments = require('../data/comments').default

export default {
  addComment: (postCode, author, comment) => {
    return new Promise((resolve, reject) => {
      //simulate the time necessary to complete an asynchronous request
      //we could easily swap out the setTimeout and put an http call here
      setTimeout(() => {
        //we actually mutate our own copy of comments, since this is what the server
        //is normally doing with its own data storage
        if(!comments[postCode]) {
          comments[postCode] = []
        }
        comments[postCode] = [...comments[postCode], {text:comment, user:author}];
        //returns the new array with the updated comments for the post
        resolve(comments[postCode])
      }, 1000)
    })
  },

  removeComment: (postCode, commentIndex) => {
    return new Promise((resolve, reject) => {
      const state = comments[postCode]

      //simulate the time necessary to complete an asynchronous request
      //we could easily swap out the setTimeout and put an http call here
      setTimeout(() => {
        //mutate the server-side data
        if(!comments[postCode]) {
          reject(new Error(`unknown post code ${postCode}`))
        }
        comments[postCode] = [...state.slice(0, commentIndex), ...state.slice(commentIndex+1)]
        //returns the new array with the updated comments for the post
        resolve(comments[postCode])
      }, 1000)
    })
  }
}