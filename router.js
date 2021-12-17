const Router = require('express')
const router = new Router()
const carController = require('./carController.js')


router.post('/carRent', carController.createRent)
router.get('/carRent', carController.calculatingСostOfCar)
router.get('/carRent', carController.loadingAllCars)
router.get('/carRent/:id', carController.loadingOneCars)






module.exports = router