const mongoose = require('mongoose');

// creating schema and document
const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: [true, 'Category name must be unique'],
        minlength: [3, 'Category name is too short'],
        maxlength: [32, 'Category name is too long'],
    },
    slug: {
        type: String,
        lowercase: true,
    }
},
{timestamps: true}
);

const catModel = mongoose.model("Category", catSchema);

module.exports = catModel;