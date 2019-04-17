const os = require('os');

// https://nodejs.org/dist/latest-v10.x/docs/api/os.html

console.log('Host Name: ' + os.hostname());
console.log('Platform: ' + os.platform());
console.log('Architecture: ' + os.arch());
console.log('Type: ' + os.type());
console.log('Total memory: ' + os.totalmem());
console.log('Free Memory: ' + os.freemem());