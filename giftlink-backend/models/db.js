// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {

    // Task 1: Connect to MongoDB
    const client = new MongoClient(url); 
    await client.connect();
    
    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);
   
    // Task 3: Return database instance
     if (dbInstance){
        return dbInstance
    };
}

module.exports = connectToDatabase;
