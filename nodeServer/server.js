'use strict';
const Hapi = require('hapi');
const MySQL = require('mysql');

// Create a server with a host and port
const server = new Hapi.Server();

const connection = MySQL.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  SSL: "enabled with DHE-RSA-AES256-SHA",
  database: "avarice",
});

server.connection({
    host: 'localhost',
    port: 8000
});

connection.connect(function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});

server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
       connection.query("SELECT * FROM product",
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});

server.start((err) => {
   if (err) {
     throw err;
   }
  console.log('Server running at:', server.info.uri);
});