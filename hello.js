const mongoDB = require('mongodb');

const MongoClient = mongoDB.MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'emp';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err) {  
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  
  insertDocuments(db, (result) => 
                       { 
					      console.log("In Callback");
						  console.log(result); 
						  console.log("Exit Callback");
					   })
  client.close();
});



const insertDocuments = function(db, callback) {
  
  const collection = db.collection('emp');
  // Insert some documents
  collection.insertMany([
    { id : 2, name: 'Ramesh' },
    { id: 1, name: 'Suresh'},
	{ id: 3, name: 'John', age: 20 }
  ], function(err, result) { 
    
    console.log("Inserted documents into the collection");
	console.log(result);
    callback(result);
  });
}






