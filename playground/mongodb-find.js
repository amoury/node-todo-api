const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the Database');
    }

    console.log('Connected to MongoDB server');

    db.collection('Doctors').find().toArray().then((docs) => {
        console.log('Doctors');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    // db.close();
});