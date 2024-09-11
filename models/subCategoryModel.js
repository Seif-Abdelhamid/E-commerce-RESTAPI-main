const mongoose = require('mongoose');

// creating schema and document
const subcatSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Sub category name must be unique'],
        minlength: [3, 'Sub Category name is too short'],
        maxlength: [32, 'Sub Category name is too long'],
    },
    slug: {
        type: String,
        lowercase: true,
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Sub category must belong to a cateogry']
    }
},
{timestamps: true}
);

const subCatModel = mongoose.model("Sub Category", subcatSchema);

module.exports = subCatModel;