const slugify = require('slugify');
const catModel = require('../models/categoryModel');

exports.createCategory = (req, res) => {
    const name = req.body.name;

    const newCategory = new catModel({
        name: name,
        slug: slugify(name)
    });
    newCategory.save().then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.json(err);
    })
}

exports.getCategories = async (req, res) => {
    try{
        const categories = await catModel.find({});
        res.status(200).json({results: categories.length, data: categories});
    }catch (err){
        res.send(err);
    }
}

exports.getCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const category = await catModel.findById(id);
        res.status(200).json({results: category.length, data: category});
    }catch (err){
        res.status(404).send(err);
    }
}

exports.updateCategory = async (req, res) => {
    
    const {id} = req.params;
    const {name} = req.body;

    const cat = await catModel.findByIdAndUpdate(
        {_id: id},
        {name: name, slug: slugify(name)},
        {new: true}
    );

    if(!cat){
        res.status(404).json({msg: "no cat found with this id"});
    }
    res.status(200).json({data: cat});

}

exports.deleteCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const category = await catModel.findByIdAndDelete(id);
        res.status(204).json({msg: "deleted"});
    }catch (err){
        res.status(404).json({msg: "erorrrrrrr"});
    }
}