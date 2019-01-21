const Resolver = {
	userlist: fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data),
  commentlist: fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then(response => response.json())
    .then(data => data),
};

export default Resolver;
