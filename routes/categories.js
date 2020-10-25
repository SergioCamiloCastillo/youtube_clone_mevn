const express = require('express');
const categoryController = require('../controllers/categories');
const router = express.Router()

router.route('/').get(categoryController.getCategories).post(categoryController.createCategories)
module.exports = router