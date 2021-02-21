// server https://stackoverflow.com/questions/18664530/how-to-create-a-simple-socket-in-node-js
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
let fs = require('fs');
const Stream = require('stream');
const { threadId } = require('worker_threads');
let busy = false;


let count = 0;

require('net').createServer(function (socket) {
    socket.on('data', function (data) {

        // if (count === 0) {
        //     try {
        //         //console.log(data.toString());
        //         fs.writeFileSync(data.toString(), '');
        //         fs.close;
        //     } catch (err) {
        //         console.error(err)
        //     }
        // } else {
        fs.appendFile('./class.js', (data.toString()), err => {
            if (err) {
                console.error(err)
                return
            }
        });
        fs.close;

        //}
        count++;
    });


}).listen(8080);
let finished = false;

async function checkForFile() {
    while (finished === false) {
        try {
            const testClass = require("./class.js");
            testClass.main();
            busy = true;
            finished = true;
        } catch (err) {
            console.error('Awaiting...')
            await sleep(1000);
        }
    }
}

async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function main() {
    fs.unlinkSync("./class.js")
    await checkForFile();
}

main();