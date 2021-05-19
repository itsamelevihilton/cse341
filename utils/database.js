const mongoose = require('mongoose');


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let mongoUsername = 'iClient';
let mongoPassword = 'MywrvhqdI0UMEixb';
const MONGODB_URL = process.env.MONGODB_URL || `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.2bcze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const mongooseConnect = (callback) => {
    mongoose.connect(MONGODB_URL, options)
        .then(result => {
            console.log('Connected to mongoose!');
            callback();
        })
        .catch(err => {
            console.error("Failed to connect to mongoose: ", err);
            throw err;
        })
}

exports.mongooseConnect = mongooseConnect;