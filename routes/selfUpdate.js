const express = require('express');
const router = express.Router();
const updateSelfDataController = require('../controllers/updateSelfDataController');

router.patch('/:id', updateSelfDataController.selfDataUpdate);

module.exports = router;