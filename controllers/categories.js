const Category = require("../models/Category");
exports.getCategories = async(req, res, next) => {
    const categories = await Category.find()
    res.status(200).json({ success: true, data: categories });
}