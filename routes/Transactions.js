const { addTransaction, getTransactions,getTansactionsByBusiness } = require("../controller/TransactionsController")

const router = require("express").Router()


router.get('/',getTransactions)
router.get('/getTransactionByBusiness', getTansactionsByBusiness)
router.post('/',addTransaction)



module.exports = router