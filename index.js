const PORT = 4000;
import express from 'express';
var app = express();

app.use(static('client'));
app.get('/', function(req,res){
	res.sendFile('index.html');
});


app.listen(PORT, function(){
    console.log('listening to requests')
}) //listen to port 


