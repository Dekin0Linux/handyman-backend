const { getClients,getSingleClient, newClient, login, updateClient, deleteClient, addBalance, deductBalance } = require('../controller/clientAuthController')

const router  = require('express').Router()

router.get('/',getClients)

router.get('/singleClient/:clientId',getSingleClient)

router.post('/newClient',newClient)

router.post('/login',login)

router.patch('/update/:clientId',updateClient)
router.patch('/addBalance/:clientId',addBalance)
router.patch('/deductBalance/:clientId',deductBalance)

router.delete('/removeClient/:clientId',deleteClient)

module.exports = router