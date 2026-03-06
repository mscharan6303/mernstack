
let http=require('http')
let server=http.createServer((req,res)=>{
   if(req.url=='/home'){
    res.writeHead(200)
    res.write('Welcome to QIS College')
    res.end()
   }
   else if(req.url=='/about'){
     res.writeHead(200)
     res.write("About page...")
     res.end()
   }
   else if(req.url=='/contact'){
     res.writeHead(200)
     res.write("Contact page...")
     res.end()
   }
   else{
     res.writeHead(200)
     res.write("Page not found...")
     res.end()
   }
})

server.listen(3000,`127.0.0.1`,()=>{
    console.log(`server running on http://127.0.0.1:3000/`)
})
