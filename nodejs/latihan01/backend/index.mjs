import * as http from 'node:http';
import * as fs from 'node:fs';
import * as path from 'node:path'; // Tambahkan untuk membaca ekstensi file

const port = 3000;

const datatest ={
  id: 1,
  nama: 'haikal',
  status: 'active',
  pesan: 'halo dari server ES modulo'
}

const server = http.createServer((req, res) => {

  

  const path2 = req.url;
  if(path2 === '/'){
    res.writeHead(200, {'Content-type' : 'application/json'})

    res.end(JSON.stringify(datatest))
    console.log(JSON.stringify(datatest, null, 2));
    
    console.log(`ditandai dengan ${path2}`);
    
  }else if(path2 === '/web'){
    // 2. Baca file index.html
  const extname = path.extname('index.html');


  let contentType = 'text/html; charset=utf-8';
  if (extname === '.jpg' || extname === '.jpeg') {
    contentType = 'image/jpeg';
  } else if (extname === '.png') {
    contentType = 'image/png';
  } else if (extname === '.css') {
    contentType = 'text/css';
  } else if (extname === '.GIF') {
    contentType = 'video/gif';
  }
  fs.readFile('index.html', (err, data) => {
    
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 File Tidak Ditemukan');
      return;
    }

    // 3. Kirim file html dengan status 200 (OK)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
  }else{
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 File Tidak Ditemukan');
    return;
  }

  // Jika browser meminta halaman utama, arahkan ke index.html
  // let filePath = req.url === '/' ? 'index.html' : `.${req.url}`;
  
  // Ambil ekstensi file (misal: .html, .jpg, .png)
  
  // Tentukan jenis Content-Type berdasarkan ekstensinya
  

  // Baca file yang diminta (bisa html atau gambar)
  // fs.readFile(filePath, (err, data) => {
  //   if (err) {
  //     res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  //     res.end('404 File Tidak Ditemukan');
  //     return;
  //   }

    // Kirim file sesuai dengan Content-Type yang benar
    // res.writeHead(200, { 'Content-Type': contentType });
    // res.end(data);
  // });
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
