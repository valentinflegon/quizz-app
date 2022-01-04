const express = require('express');

const userCtrl = require('../controllers/user-controller');

const router = express.Router();

router.post('/create-user', userCtrl.createUser);
router.put('/update-user/:id', userCtrl.updateUser);
router.delete('/delete-user/:id', userCtrl.deleteUser);
router.get('/get-user/:id', userCtrl.getUserById);
router.get('/users', userCtrl.getUsers);
router.post('/login', userCtrl.logIn);

module.exports = router;