#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];


request.get(url, (error, response, body) => {
  if (error); {
    console.log(erro);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
