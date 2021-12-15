const CarRent = require('./carRent')

class CarController {
    static createRent = async (req, res) => {
        try {
            const {username, modelAuto, stateNumber, VIN, dateFrom, dateTo, tariff} = req.body;
            const carsRent = await CarRent.create({username, modelAuto, stateNumber, VIN, dateFrom, dateTo, tariff})
            return res.status(200).json(carsRent)
        } catch (e) {
            res.status(500).json({message:'rental failed'})
        }
    }

    static getAllRent = async (req, res) => {
        try {
            const carsRent = await CarRent.find();
            return res.status(200).json(carsRent)
        } catch (e) {
            res.status(500).json({message:'rental failed'})
        }
    }

    static getOneRent = async (req, res) => {
        try {
        const {id} = req.params
        if (!id) {
            res.status(400).json({message: 'Не указан id'})
        }
        const carsRent = await CarRent.findById(id)
        return res.status(200).json(carsRent)
        } catch (e) {
            res.status(500).json(e)
        }
    }



    static update = async (req, res) => {
        try {
            const carsRent = req.body
            if(!carsRent._id) {
                res.status(400).json({message: 'Не указан id'})
            }
            const updatedCarsRent = await CarRent.findByIdAndUpdate(carsRent._id, carsRent)
            return res.status(200).json(updatedCarsRent)
        } catch (e) {
            res.status(500).json(e)
        }
    }


    static async delete(req, res) {
        try {
            const {id} = req.params
            if(!id) {
                res.status(400).json({message: 'Не указан id'})
            }
            const carsRent = await CarRent.findByIdAndDelete(id)
            return res.status(200).json(carsRent)
        } catch (e) {
            res.status(500).json({message:'lol'})
        }
    }
}


module.exports = CarController
