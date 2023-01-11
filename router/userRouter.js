const express =require('express')
const router = express.Router()
const user = require('../controller/usercontroller')

router.get('/get_user',user.getUser)
router.post('/create_user', user.createUser)
router.put('/updateUser/:id',user.updateUser)

module.exports =router