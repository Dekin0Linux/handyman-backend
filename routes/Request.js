const { getAllRequest, newRequest, getRequestById, updateRequest, deleteRequest } = require("../controller/RequestController")

const router = require("express").Router()



router.get('/',getAllRequest)

router.get('/requestById',getRequestById)

router.post('/',newRequest)

router.patch('/editRequest/:requestId',updateRequest)

router.delete('/deleteRequest/:requestId',deleteRequest)


module.exports = router