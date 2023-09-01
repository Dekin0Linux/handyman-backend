const { getAllRequest, newRequest, getRequestById, updateRequest, deleteRequest, getRequestByIdOnDone } = require("../controller/RequestController")

const router = require("express").Router()



router.get('/',getAllRequest)

router.get('/requestById/:id',getRequestById)
router.get('/requestByIdDone/:id',getRequestByIdOnDone) //WHERE STATUS IS DONE

router.post('/',newRequest)

router.patch('/editRequest/:requestId',updateRequest)

router.delete('/deleteRequest/:requestId',deleteRequest)


module.exports = router