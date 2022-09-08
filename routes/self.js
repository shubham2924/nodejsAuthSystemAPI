const express = require('express');
const router = express.Router();
const ownDataController = require('../controllers/ownDataController');

router.post('/:id', ownDataController.ownData);

module.exports = router;