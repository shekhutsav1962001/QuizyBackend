var express = require('express')
var router = express.Router()
const teacherController  = require('../controller/teacherController')




router.post('/createquiz',teacherController.verifyToken,teacherController.createQuiz)
router.get('/getuploadquiz',teacherController.verifyToken,teacherController.getUploadquiz)
router.get('/gethomequiz',teacherController.verifyToken,teacherController.getHomequiz)
router.get('/seestudent',teacherController.verifyToken,teacherController.seeStudent)
router.delete('/blockuser/:id',teacherController.verifyToken,teacherController.blockStudent)
router.delete('/unblockuser/:id',teacherController.verifyToken,teacherController.unblockStudent)
router.delete('/deletequiz/:id',teacherController.verifyToken,teacherController.deleteQuiz)
router.post('/uploadquiz',teacherController.verifyToken,teacherController.uploadQuiz)
router.post('/addquestion',teacherController.verifyToken,teacherController.addQuestion)
router.get('/getallquestion/:id',teacherController.verifyToken,teacherController.getAllQuestion)
router.delete('/deletequestion/:id',teacherController.verifyToken,teacherController.deleteQuestion)

module.exports = router
