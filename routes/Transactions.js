const { addTransaction, getTransactions } = require("../controller/TransactionsController")

const router = require("express").Router()


router.get('/',getTransactions)
router.post('/',addTransaction)



module.exports = router