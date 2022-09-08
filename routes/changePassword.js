const express = require('express');
const router = express.Router();
const changePasswordController = require('../controllers/changePasswordController');

router.patch('/:id', changePasswordController.changeUserPassword);

module.exports = router;