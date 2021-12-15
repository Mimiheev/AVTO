const Mongoose = require('mongoose')


const carRent = new Mongoose.Schema({

    username: {type: String, required: true},

    modelAuto: {type: String, required: true},

    stateNumber: {type: String},

    VIN: {type: String},

    dateFrom: {type: String},

    dateTo: {type: String},

    tariff: {type: String}



})


module.exports = Mongoose.model('carRent', carRent)