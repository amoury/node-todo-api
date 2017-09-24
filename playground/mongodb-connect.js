const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the Database');
    }

    console.log('Connected to MongoDB server');

    db.collection('Doctors').insertOne({
        name: 'Dr. Parul Dixit',
        dept: 'Dermatology',
        hospital: 'Prime Medical Center, Al Qassimia',
        emirate: 'Sharjah',
        votesCount: 1,
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert the Doctor Record', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to do');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //     db.collection('Users').insertOne({
    //         name: 'Ansar',
    //         age: 28,
    //         location: 'Dubai'
    //     }, (err, result) => {
    //         if (err) {
    //             console.log('Unable to add the User');
    //         }

    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     })

    //     db.close();
});