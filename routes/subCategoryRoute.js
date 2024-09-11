const express = require('express');
const { createSubCategory, getSubCategories, getSubCategory, updateSubCategory, deleteSubCategory } = require('../services/subCategoryServices');
const router = express.Router({mergeParams: true});

router.route('/').get( getSubCategories).post(createSubCategory);
router.route('/:id').get( getSubCategory).put(updateSubCategory).delete(deleteSubCategory);

module.exports = router;