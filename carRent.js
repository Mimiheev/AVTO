const Mongoose = require('mongoose')


const carRent = new Mongoose.Schema({

    modelAuto: {type: String, required: true},

    VIN: {type: String, required: true},

    stateNumber: {type: String},

    dateStart: { type: Date, default: Date.now },

    dateFinish: { type: Date, default: Date.now },


})


module.exports = Mongoose.model('carRent', carRent)