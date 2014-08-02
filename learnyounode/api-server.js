var http = require('http')      // require http client
var url = require('url')        // parse url
var moment = require('moment')  // handle times, sanely

function get_time (unix_timestamp) {
  var hour = unix_timestamp.hour();
  var minute = unix_timestamp.minute();
  var second = unix_timestamp.second();
  var time = {hour:hour, minute:minute, second:second}
  return time
}


http.createServer(function(req, res){

  if (req.method == 'GET') {

    // console.log(req.url)
    parsed_url = url.parse(req.url, true); // parse the url
    var unix_timestamp = moment(parsed_url.query.iso); // convert current time into unix timestamp

    if (parsed_url.pathname == "/api/parsetime"){
      res.end(JSON.stringify(get_time(unix_timestamp))); // respond with hour, minute, second

    } else if (parsed_url.pathname == "/api/unixtime") {
      var time = {unixtime: unix_timestamp.valueOf()};
      res.end(JSON.stringify(time)); // respond with timestamp
  }

 } else {
   res.end()// end if not GET request
 };

}).listen(process.argv[2]) // grab the post from the command line