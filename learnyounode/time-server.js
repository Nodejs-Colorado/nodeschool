var net = require('net')

// add 0 if number is less than 10
function padded(timeChunk){
  console.log(timeChunk)
  if(timeChunk < 10){
    return '0'+timeChunk;
  } else {
    return ''+timeChunk;
  }
}

// create server
var server = net.createServer(function(socket) {
  date_time = new Date();
  // console.log(date_time)
  var year = padded(date_time.getFullYear());
  var month = padded(date_time.getMonth()+1);
  var day = padded(date_time.getDate());
  var hour = padded(date_time.getHours());
  var minute = padded(date_time.getMinutes());
  socket.write(year + "-" + month + "-" + day + " " + hour + ":" + minute);
  socket.write('\n');
  socket.end();
}).listen(process.argv[2]); // listen to server on specific port