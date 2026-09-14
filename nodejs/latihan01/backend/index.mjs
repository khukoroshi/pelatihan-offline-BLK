import * as http from 'node:http';
// import * as fs from 'node:fs';
// import * as path from 'node:path';

const port = 3000;


const server = http.createServer((req, res) => {
  const path2 = req.url;
  const userAgent = req.headers['user-agent'];
  
  const datatest = {
    id: 1,
    nama: 'haikal',
    status: 'active',
    pesan: 'halo dari server ES modulo'
  };
  
  switch (path2) {
    case '/data':
      res.writeHead(200, { 'Content-type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(datatest));
      console.log(JSON.stringify(datatest, null, 2));
      console.log(`ditandai dengan ${path2}`);
      break;
    
    case '/browser':
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(`<h1>Hallo!!!</h1><p>Browser kamu adalah: ${userAgent}</p>`)
      break;

    default:
      res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
      res.end('testing path utama')
      break;
  }
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
