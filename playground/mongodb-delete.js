const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the Database');
    }

    console.log('Connected to MongoDB server');

    db.collection('Doctors').deleteMany({ name: 'Dr. Sussane' }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    // db.close();
});