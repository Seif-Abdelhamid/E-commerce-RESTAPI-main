const slugify = require('slugify');
const subCatModel = require('../models/subCategoryModel');

exports.createSubCategory = (req, res) => {
    const name = req.body.name;
    const category = req.body.category;

    const newSubCategory = new subCatModel({
        name: name,
        slug: slugify(name),
        category: category
    });
    newSubCategory.save().then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.json(err);
    })
}

exports.getSubCategories = async (req, res) => {
    try{
        console.log("looking for: ", req.params.catid);
        //to handle get subcats of a specific cat
        filter = {};
        if(req.params.catid){
            filter = {category: req.params.catid}
        }
        const subCategories = await subCatModel.find(filter);
        res.status(200).json({results: subCategories.length, data: subCategories});
    }catch (err){
        res.send(err);
    }
}

exports.getSubCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const subCategory = await subCatModel.findById(id);
        res.status(200).json({results: subCategory.length, data: subCategory});
    }catch (err){
        res.status(404).send(err);
    }
}

exports.updateSubCategory = async (req, res) => {
    
    const {id} = req.params;
    const {name, category} = req.body;

    const subCat = await subCatModel.findByIdAndUpdate(
        {_id: id},
        {name: name, slug: slugify(name), category: category},
        {new: true}
    );

    if(!subCat){
        res.status(404).json({msg: "no cat found with this id"});
    }
    res.status(200).json({data: subCat});

}

exports.deleteSubCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const subCategory = await subCatModel.findByIdAndDelete(id);
        res.status(204).json({msg: "deleted"});
    }catch (err){
        res.status(404).json({msg: "erorrrrrrr"});
    }
}