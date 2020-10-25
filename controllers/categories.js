const Category = require("../models/Category");
//Obtener categorias
exports.getCategories = async (req, res, next) => {
    const categories = await Category.find()
    res.status(200).json({ success: true, data: categories });
}
//Obtener categoria por ID
exports.getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id)

        if (!category) {
            return res.status(400).json({ success: true, error: `No se encontro la categoria con el id: ${req.params.id}` })
        }
        res.status(200).json({ success: true, data: category });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
    }

}
//Crear categorias
exports.createCategories = async (req, res, next) => {
    try {
        const category = await Category.create(req.body)
        res.status(200).json({ succes: true, data: category })
    } catch (err) {
        res.status(400).json({ succes: false, error: err.message })
    }
}
//Actualizar categoria
exports.updateCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, context:'query'})
        if(!category){
            return res.status(400).json({
                success:true,  error: `No se encontro la categoria con el id: ${req.params.id}` 
            })
        }
        res.status(200).json({ succes: true, data: category })
        
    } catch (err) {
        res.status(400).json({ succes: false, error: err.message })
    }
}
//Eliminar categoria por ID
exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id)

        if (!category) {
            return res.status(400).json({ success: true, error: `No se encontro la categoria con el id: ${req.params.id}` })
        }
        await category.remove()
        res.status(200).json({ success: true, data: category });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
    }

}