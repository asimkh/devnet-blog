//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/blog/dist/blog/'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/blog/dist/blog/index.html'));
});

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);

var server = app.listen(process.env.PORT || 8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
   
})
