var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Doctor } = require('./models/doctor');
var { User } = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/doctors', (req, res) => {
    var doctor = new Doctor({
        name: req.body.name,
        dept: req.body.dept,
        hospital: req.body.hospital,
        emirate: req.body.emirate,
        votesCount: req.body.votesCount
    });

    doctor.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    })
});

app.get('/doctors', (req, res) => {
    Doctor.find().then((doctors) => {
        res.send({
            doctors
        })
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/doctors/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Doctor.findById(id).then((doc) => {
        if (!doc) {
            return res.status(404).send();
        }

        res.send({ doc });
    }).catch((e) => {
        res.status(400).send();
    })

})

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };