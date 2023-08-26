const { newComment, getComments } = require("../controller/CommentsController")

const router = require("express").Router()


router.get('/',getComments)
router.post('/',newComment)


module.exports = router