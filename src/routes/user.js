var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.post('/createUser', userController.createuser);
router.get('/getUser/:id',userController.getUser);
router.get('/getAllUsers',userController.getAllUsers);
router.put('/updateUser',userController.updateUser);
router.delete('/deleteById/:id',userController.deletUser);

module.exports = router;