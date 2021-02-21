const fs = require('fs');
const dest = fs.createWriteStream('./output');const { SRTReadStream } = require('@eyevinn/srt');
const srt = new SRTReadStream('0.0.0.0', 1234);
srt.listen(readStream => {
  console.log("Client connected");
  readStream.pipe(dest);
});srt.on('end', () => {
  console.log("Client disconnected");
});
console.log("Waiting for client to connect");