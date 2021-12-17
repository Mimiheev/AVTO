const CarRent = require('./carRent')


class CarController {
    static calculatingСostOfCar =  (req, res) => {
        try {
            const {VIN} = req.body
            return res.status(200).json({VIN})
        } catch (e) {
            res.status(500).json({message:'invalid request'})
        }

    }

    static createRent = async (req, res) => {
        try {
            const {modelAuto, stateNumber, VIN, dateStart, dateFinish} = req.body;
            return res.status(200).json({modelAuto, stateNumber, VIN, dateStart, dateFinish})
        } catch (e) {
            res.status(500).json({mg: 'invalid request'})
        }

    }

    static loadingAllCars = async (req, res) => {
        try {
            // await CarRent.find();
            return res.status(200).json({mg: 'successfully'})
        } catch (e) {
            res.status(500).json({mg: 'invalid request'})
        }
    }

    static loadingOneCars = async (req, res) => {
        try {
        const {id} = req.body
            return res.status(200).json({id})
        } catch (e) {
            res.status(500).json({mg: 'invalid request'})
        }

    }

}


module.exports = CarController
