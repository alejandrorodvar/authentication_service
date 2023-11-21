const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; 

// Connection URI, database name, collection name 
const uri = 'mongodb+srv://sayheekim:D2CbSIaKZr1fgpGV@cluster0.zkdixgx.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'nutrition_app';
const collectionName = 'users';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Parse JSON data
app.use(express.json());

// Endpoint, validation block
app.post('/getData', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Checks database for existing usernames
        const user = await client.db(dbName).collection(collectionName).findOne({ username });

        // Username + password match found -> valid; otherwise, error
        if (user) {
            res.json({ message: 'Valid credentials' });
          } else {
            res.status(401).json({ error: 'Invalid username or password' });
          }
        } catch (error) {
          console.error('Error during data retrieval process:', error);
          res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.close();
        console.log('MongoDB connection closed');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Close MongoDB connection
process.on('SIGINT', () => {
    client.close().then(() => {
        process.exit(0);
    });
});
