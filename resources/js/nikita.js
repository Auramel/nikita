import fetch from 'node-fetch';
import fs from 'file-system';

console.log('running scripts...');
await sleep(10000);
const result = await fetch('https://app.chatboost.io/logs');
fs.writeFile('TEST.txt', result.status.toString());

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
