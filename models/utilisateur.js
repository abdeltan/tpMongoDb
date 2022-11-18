const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    prenom: {type: String,required: true },
    nom: {type: String,required: true},
    email: {type: String,required: true},
    telephone: {type: String,required: false},
    password: {type: String,required: true,},
    dateNaissance: {type: Date,default: Date.now},
    dateCreated: {type: Date,default: Date.now},
    dateUpdated: {type: Date,default: Date.now}
});

module.exports = mongoose.model('User', User);