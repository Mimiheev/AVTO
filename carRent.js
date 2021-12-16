const Mongoose = require('mongoose')


const carRent = new Mongoose.Schema({

    username: {type: String, required: true},

    modelAuto: {type: String, required: true},

    VIN: {type: String, required: true},

    dateFrom: {type:  Date, required: true },

    dateTo: {type:  Date, required: true},

    stateNumber: {type: String},

    tariff: {type: String, required: true}

})


module.exports = Mongoose.model('carRent', carRent)