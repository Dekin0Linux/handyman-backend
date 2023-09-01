const { newComment, getComments, getBussComment } = require("../controller/CommentsController")

const router = require("express").Router()


router.get('/',getComments)
router.get('/:businessId',getBussComment)
router.post('/',newComment)


module.exports = router