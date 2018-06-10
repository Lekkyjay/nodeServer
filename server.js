const http = require('http');
const port = 8000;
function onRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello world');
}
http.createServer(onRequest).listen(port, ()=> {
  console.log('Server started on port '+port);
});