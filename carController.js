const CarRent = require('./carRent')


class CarController {
    static calculatingСostOfCar = async (req, res) => {
        try {
            const {VIN} = req.body
            if (!VIN) {
                return res.status(400).json({message: 'the car is not in the list'})
            }
            await CarRent.find({VIN:{$in:[VIN]}})
            return res.status(200).json({mg: 'successfully'})
        } catch (e) {
            res.status(500).json({message:'rental failed'})
        }


    }

    static createRent = async (req, res) => {
        try {
            const {modelAuto, stateNumber, VIN, dateStart, dateFinish} = req.body;
            await CarRent.create({modelAuto, stateNumber, VIN, dateStart, dateFinish})
            return res.status(200).json({mg: 'successfully'})
        } catch (e) {
            res.status(500).json({mg: 'invalid request'})
        }

    }

    static loadingAllCars = async (req, res) => {
        try {
            await CarRent.find();
            return res.status(200).json({mg: 'successfully'})
        } catch (e) {
            res.status(500).json({mg: 'invalid request'})
        }
    }

    static loadingOneCars = async (req, res) => {
        try {
        const {id} = req.body
        if (!id) {
            res.status(400).json({message: 'Не указан id'})
        }
            await CarRent.findById(id)
            return res.status(200).json({mg: 'successfully'})
        } catch (e) {
            res.status(500).json({mg: 'invalid request'})
        }

    }

}


module.exports = CarController
