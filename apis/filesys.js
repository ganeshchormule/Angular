const fs = require('fs');

const filePath = 'abc.txt';


fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);        
    } else {
        console.log(err);
    }
}); 


/*
var buffer = fs.readFileSync(filePath, {encoding: 'utf-8'});

console.log(buffer);
*/


console.log('Completed...')