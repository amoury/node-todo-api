const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Doctor } = require('./../models/doctor');

describe('POST /doctors', () => {
    it('should a new doctor', (done) => {
        var name = 'Dr. Mocha';

        request(app)
            .post('/doctors')
            .send({ name })
            .expect(200)
            .expect((res) => {
                expect(res.body.name).toBe(name);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Doctor.find().then((doctors) => {
                    expect
                })
            });
    });
});