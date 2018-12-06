var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var path = require('path')
app.use(express.static(__dirname + '/public/dist/public'))
app.use(bodyParser({extended : true}))
app.listen(8000, () => {
    console.log("Listening on port 8000")
})


app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html')
})

app.all('*', function(req, res){
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})

