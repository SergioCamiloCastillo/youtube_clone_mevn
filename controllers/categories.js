const Category = require("../models/Category");
//Obtener categorias
exports.getCategories = async(req, res, next) => {
    const categories = await Category.find()
    res.status(200).json({ success: true, data: categories });
}
//Crear categorias
exports.createCategories=async(req, res, next)=>{
    try{
        const category = await Category.create(req.body)
        res.status(200).json({succes:true, data:category})
    }catch(err){
        res.status(400).json({succes:false, error:err.message})
    }
}