var fs=require("fs")
var onReadFile=function(err,data)
{
 console.log(data.toString());
};
fs.readFile("data.txt",onReadFile)