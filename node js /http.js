// const http = require('http');
// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   port: 80,
//   path: '/posts',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// // Make the HTTP request
// const req = http.request(options, (res) => {
//   let data = '';

//   // A chunk of data has been received.
//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   res.on('end', () => {
//     console.log('Response:', data);
//   });
// });

// // Handle any errors with the request
// req.on('error', (error) => {
//   console.error(`Error: ${error.message}`);
// });

// // End the request
// req.end();


// -----------------------------------------------------------------------------------------
// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Received a GET request');
//   } else if (req.method === 'POST') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Received a POST request');
//   } else {
//     res.writeHead(405, { 'Content-Type': 'text/plain' });
//     res.end(`HTTP method ${req.method} is not supported`);
//   }
// });

// Start the server on port 3000
// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// https://codeopinion.com/is-a-rest-api-with-cqrs-possible/