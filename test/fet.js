#!/usr/bin/node

async function getGithubUser(username) { // async keyword allows usage of await in the function and means function returns a promise
    const response = await fetch(`https://api.github.com/users/${username}`); // Execution is paused here until the Promise returned by fetch is resolved
    return response.json();
  }
  
getGithubUser('timisot')
    .then(user => console.log(user)) // logging user response - cannot use await syntax since this code isn't in async function
    .catch(err => console.log(err));
