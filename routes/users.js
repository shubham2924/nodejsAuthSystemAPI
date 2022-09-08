const express = require('express');
const router = express.Router();
const allUserInfoController = require('../controllers/allUsersInfoController');

router.get('/', allUserInfoController.allUserInfoController);

module.exports = router;