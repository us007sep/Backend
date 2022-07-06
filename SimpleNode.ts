import * as http from 'http';

const server =  http.createServer((request ,response) => {
    if(request.url === '/a')  
    response.write("Welcome to Backend");
    else    
    response.write("Invalid URL");
    response.end();
});

server.listen(process.env.PORT || 3005 , () => console.log("Server 3005 running..."));  //Available port or 3005