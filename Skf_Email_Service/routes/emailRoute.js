const express = require('express')
const router = express.Router()
const emailController = require('../controllers/emailController');
router.get('/details', emailController.extractEmailAttachment);
// router.get('/cc', emailController.extractCCAttachment);
// router.get('/delivery', emailController.extractDevelivery);

module.exports = router