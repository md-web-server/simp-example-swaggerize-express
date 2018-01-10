// sourced from, https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://your_connection_string", function(err, db) {
  db.collection("your_collection").aggregae([], function(err, result) {
    db.close();
    return result.json;
  });
});
