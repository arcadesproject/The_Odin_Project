const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

//node index.js on command line
//localhost:3000 in browser

//yarn add axios
const axios = require('axios');

axios
  .get('https://example.com/todos')
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

//
//***SAME AS ***//
//
// const https = require('https')
// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()

const axios = require('axios');

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk',
  })
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

//
//***SAME AS ***//
//
// const https = require('https')

// const data = JSON.stringify({
//   todo: 'Buy the milk'
// })

// const options = {
//   hostname: 'whatever.com',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()
