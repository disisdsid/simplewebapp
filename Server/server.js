var http=require("http");
var onReceiveRequest=function(req,res)
{
    console.log("Request is received from client...");
    res.write("<h1> Welcome to my first Application</h1>");
    res.end();
}
var server=http.createServer(onReceiveRequest);
server.listen(7878);
console.log("Server is listining on port 7878")
