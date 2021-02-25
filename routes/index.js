const Controller = require('../controllers/controller')
const AdminController = require('../controllers/admin.js')
const router = require('express').Router()


router.get('/', Controller.home)

/*Login*/
router.get('/login', Controller.login)
router.post('/login/process', Controller.loginProcess)

/**Instrument*/
router.get('/piano/rules', Controller.pianoRules)
router.get('/guitar/rules', Controller.gitarRules)
router.get('/drum/rules', Controller.drumRules)


// router.get('/register', Controller.register)

/**CRUD */
router.get('/admin', AdminController.superUser)
router.get('/admin/student', AdminController.getListStudent)
router.get('/admin/student/add', AdminController.getAddStudent)
router.post('/admin/student/add', AdminController.postAddStudent)

router.get('/admin/student/edit/:id', AdminController.getEditStudent)
router.post('/admin/student/edit/:id', AdminController.postEditStudent)

router.get('/admin/student/delete/:id', AdminController.getDeleteStudent)






module.exports = router