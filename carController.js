const CarRent = require('./carRent')
const tariff = require('./Constants/tariff')

class CarController {
    static createRent = async (req, res) => {

            const {username, modelAuto, stateNumber, VIN, dateFrom, dateTo, tariff} = req.body;

            const {saturday, sunday} = new Date
            const date1 = new Date(dateTo);
            const date2 = new Date(dateFrom);
            const timeDiff = Math.abs(date2.getTime() - date1.getTime());
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if ( diffDays > 30) {
                return res.status(400).json({message: 'Max rent 30 days'})
            }
            if (dateTo === saturday || dateTo === sunday) {
                return res.status(400).json({message: ''})
            }
            if (dateFrom === saturday || dateFrom === sunday) {
                return res.status(400).json({message: ''})
            }

            const listFrom = CarRent.find({dateFrom:{$gt: dateFrom, $lt: dateTo}});
            const listTo = CarRent.find({dateTo: {$gt: dateFrom - 3, $lt: dateTo }});
            const listFromForThreeDays = CarRent.find({dateFrom: {$gt: dateTo, $lt: dateTo - 3}})


            if (listFrom.linght !== 0) {
                // return res.status(400).json({message: ''})
                console.error("2")

            }
            if (listTo.linght !== 0) {
                // return res.status(400).json({message: ''})
                console.error("3")
            }
            if(listFromForThreeDays.length !== 0) {
                // return res.status(400).json({message: ''})
                console.error("4")
            }

            const price = tariff['price'] * days;

            if (days > 15) {
                price - price * 15 / 100
            } else if (days > 6) {
                price - price * 10 / 100
            } else if (days > 3) {
                price - price * 5 / 100
            }
         try {
                const carsRent = await CarRent.create({username, modelAuto, stateNumber, VIN, dateFrom, dateTo, tariff})
             return res.status(200).json(carsRent)
        } catch (e) {
            console.log(e)
        }
    }

    static getAvgByCar = async (req, res) => {
        try {
            const {VIN} = req.params
            if (!VIN) {
                return res.status(400).json({message: ''})
            }
            const carsRent = await CarRent.find({VIN:{$in:[VIN]}})
            const busyDays = [];
            for (const rent in carsRent) {
                const rentDays = []
                for (const day in rentDays) {
                    busyDays.push(day);
                }
            }
            return res.status(200).json(busyDays)
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
