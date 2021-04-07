var express = require('express')
var router = express.Router()
const adminController  = require('../controller/adminController')


router.get('/seestudent',adminController.verifyToken,adminController.seeStudent)
router.get('/seeteacher',adminController.verifyToken,adminController.seeTeacher)
router.delete('/blockuser/:id',adminController.verifyToken,adminController.block)
router.delete('/unblockuser/:id',adminController.verifyToken,adminController.unblock)
router.get('/getallquiz',adminController.verifyToken,adminController.getallquiz)
router.get('/getallquestion/:id',adminController.verifyToken,adminController.getAllQuestion)
router.delete('/deletequestion/:id',adminController.verifyToken,adminController.deleteQuestion)
router.delete('/deletequiz/:id',adminController.verifyToken,adminController.deleteQuiz)
// router.post('/registerstudnet',apiController.registerStudent)
module.exports = router
