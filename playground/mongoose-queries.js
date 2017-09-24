const { mongoose } = require('./../server/db/mongoose');
const { Doctor } = require('./../server/models/doctor');

var id = "59c5fd85cdfeba860b98cf4b";

Doctor.find({
    _id: id
}).then((doctors) => {
    console.log('Doctors', doctors);
});

Doctor.findOne({
    _id: id
}).then((doctor) => {
    console.log('Doctor', doctor);
});

Doctor.findById(id).then((doctor) => {
    console.log('Todo by Id ', doctor);
})