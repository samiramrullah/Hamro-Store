const http=require('http');
const app=require('./app')
require('dotenv').config();
const server=http.createServer(app)
const port=process.env
server.listen(5000,()=>{
    console.log(`Running on port 5000`);
})