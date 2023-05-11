import fetch from 'node-fetch';
import fs from 'file-system';

console.log('running scripts...');

const result = await fetch('https://app.chatboost.io/logs');
fs.writeFile('TEST.txt', result.status.toString());
