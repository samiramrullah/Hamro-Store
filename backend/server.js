const http=require('http');

const server=http.createServer((req,res,next)=>{
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
})

server.listen(5000,()=>{
    console.log(`Running on port 5000`);
})