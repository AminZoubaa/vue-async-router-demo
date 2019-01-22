const userURL = 'https://jsonplaceholder.typicode.com/users';
const commentURL = 'https://jsonplaceholder.typicode.com/comments?_limit=10';
const options = { cache: 'no-cache' };

export default {
  // return promise wich can be resolved one time and hold its state
  cachedUserlist: fetch(userURL, options)
    .then(response => response.json())
    .then(data => data),

  // return promise wich can be resolved one time and hold its state
  cachedCommentlist: fetch(`${commentURL}${0}`, options)
    .then(response => response.json())
    .then(data => data),

  // get always a new promise to resolve
  get userlist() {
    return fetch(userURL, options)
      .then(response => response.json())
      .then(data => data);
  },

  // get always a new promise to resolve
  get commentlist() {
    return fetch(commentURL, options)
      .then(response => response.json())
      .then(data => data);
  },

};
