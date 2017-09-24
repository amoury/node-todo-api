const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the Database');
    }

    console.log('Connected to MongoDB server');

    db.collection('Doctors').findOneAndUpdate({
        name: 'Dr. Parul Dixit',
    }, {
      $set: { name: 'Dr. Sussane' }
    }, { 
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })

    //db.close();
});