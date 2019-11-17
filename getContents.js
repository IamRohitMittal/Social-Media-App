var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fs=require('fs');
var express=require('express');
var urlRegex=require('url-regex');

//Create an Express Server
app=express();

app.get('/',(req,res)=>{
    let fbUrl=req.query.fbUrl;
    
    //Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    //Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', fbUrl);
    xhr.setRequestHeader( "Content-Language", "en-US")

    //Send the request over the network
    xhr.send();

    //onLoad be called after the response is received
    xhr.onload = function() {
      if (xhr.status != 200) { // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        console.log(writeStream);
      } else { 
        // show the result
      
        var createStream=xhr.responseText;
        var regex=/<a.+?<div.+https:\/\/www.instagram\.com.+<\/div><\/a>/g
        var urls = createStream.match(regex);
        //console.log(urls[0]);
        
        var writeStream=fs.createWriteStream("url.html");
        writeStream.write(urls[0]);
        writeStream.end();


        console.log(urls[0].match(/^https:\/\/www.instagram.com\/.+?<$/g));

        var writeStream=fs.createWriteStream("contents.html");
        writeStream.write(createStream);
        writeStream.end();    

        console.log("Http Response Retrieved for URL provided"); 
      }
    };

    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
      }
    };

    xhr.onerror = function() {
        console.log("Request failed");
    };

    res.send("Thanks for using the service");
})

app.listen(8080,function(){
  console.log("Server Created on Port : 8080");
});

