const { getAllFreelancers, newFreelancer } = require("../controller/freelancerAuthController")

const router = require("express").Router()



router.get('/',getAllFreelancers)
router.post('/newFreelancer', newFreelancer)


module.exports = router