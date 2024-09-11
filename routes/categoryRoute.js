const express = require('express');
const { getCategories, createCategory, getCategory, updateCategory, deleteCategory } = require('../services/categoryServices');
const subCategoriesRoute = require('./subCategoryRoute');
const router = express.Router();

router.use('/:catid/subcats', subCategoriesRoute);

router.route('/').get( getCategories).post(createCategory);
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;