const Router = require('express')
const router = new Router()
const carController = require('./carController.js')


router.post('/carRent', carController.createRent)
router.get('/carRent', carController.getAvgByCar)
router.get('/carRent', carController.getAllRent)
router.get('/carRent/:id', carController.getOneRent)
router.put('/carRent', carController.update)
router.delete('/carRent/:id', carController.delete)





module.exports = router