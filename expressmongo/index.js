const express = require('express');
const app = express();
const route = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atulwebkul:atulwebkul@testing.smp6g6a.mongodb.net/?retryWrites=true&w=majority&appName=testing";
const database = "testing"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbConnection() {

        let results = await client.connect();
        let db = results.db('sample_mflix');
        return db.collection('test');

}

dbConnection().then((resp) => {
    resp.find({}).toArray().then((data) => {
       console.log(data)
   })

})

dbConnection();
