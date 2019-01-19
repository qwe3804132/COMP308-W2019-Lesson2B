const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function ServerParams(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Peiran Liu\n300884514\n');
}

const server = http.createServer(ServerParams);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


  

  //如何开始服务器？
  //node server.js//
  //npm init
  //npm start
  //npm install @types/node --save-dev
