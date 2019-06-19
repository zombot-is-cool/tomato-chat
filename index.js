var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('t0MATO p3rS0n c0nn3ctd');
    socket.on ('chat', function(message) {
        console.log(message);
        if (message.vlal != "" && message.vlal.length < 200) {
            io.emit('chat', message.name + " : " + message.vlal);
        }
        
    });
    socket.on('disconnect', function() {
        console.log('someone disconnected D:')
    });
} );
http.listen(3000, function() {
    console.log("tomato chat");
});
