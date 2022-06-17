const path = require('path')
const fs = require('fs')
const http = require('http')
const PORT = 5000;


const server = http.createServer((req,res)=> {
       if(req.url === '/'){
           let filePath = path.join( __dirname,'Public','index.html')
           fs.readFile(filePath,'utf8',(err,data) =>{
           res.writeHead(200,{'content-Type':'text/html'})
           res.end(data)
       })
    }
});




server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});