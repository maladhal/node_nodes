
var fs = require('fs');

       

var sendSocket = require('net').Socket();
//s.write('GET http://www.google.com/ HTTP/1.1\n\n');

/* s.on('data', function(d){
    console.log(d.toString());
});
*/
//process.stdin.pipe(process.stdout);

const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()
let count = 0;

writableStream._write = (chunk, encoding, next) => {
  sendSocket.connect(8080, 'dell-i5');
  // if (count === 0 ){
  //   s.write('class.js')
  // }
  count++;

  sendSocket.write(chunk);

  sendSocket.end(); 
  next();

}


fs.createReadStream(process.argv[process.argv.length - 1]).pipe(writableStream);

//process.stdin.pipe(writableStream);

