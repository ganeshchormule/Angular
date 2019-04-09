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
  
  // Set 1
  
  /* 
  
  insertDocuments(db, () => console.log('Insert Doc executed'));  
  findDocuments(db,() => console.log('Find documents Executed'));
  findDocumentsWithFilter( db, () => console.log('Find with filter Executed'));
  */
  
  
  // Set 2
  updateDocument(db, () => console.log('Update Doc executed'));
  removeDocument(db, () => console.log('Remove Doc executed'));
  
  findDocuments(db,() => console.log('Find documents Executed'));
  

  client.close();
});


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('emp');
  // Insert some documents
  collection.insertMany([
    { id : 2, name: 'Ramesh' },
    { id: 1, name: 'Suresh'}
  ], function(err, result) {
  
    
    console.log("Inserted documents into the collection");
    callback(result);
  });
}



const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('emp');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


const findDocumentsWithFilter = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('emp');
  // Find some documents
  collection.find({id: 2}).toArray(function(err, docs) {
    
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

const updateDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('emp');
  
  collection.updateOne({ id : 1 }
    , { $set: { name : 'Mukesh' } }, function(err, result) {
    
    console.log("Updated the document with the field a equal to 1");
    callback(result);
  });  
}


const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('emp');
  // Delete document where a is 3
  collection.deleteOne({ id: 2 }, function(err, result) {
    
    console.log("Removed the document with id 2");
    callback(result);
  });    
}


