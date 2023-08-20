const { getClients,getSingleClient, newClient, login, updateClient, deleteClient } = require('../controller/clientAuthController')

const router  = require('express').Router()

router.get('/',getClients)

router.get('/singleClient/:clientId',getSingleClient)

router.post('/newClient',newClient)

router.post('/login',login)

router.patch('/update/:clientId',updateClient)

router.delete('/removeClient/:clientId',deleteClient)

module.exports = router